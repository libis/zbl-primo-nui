export default class SfxResolve {
    constructor(sfxBase, remoteIp) {
        this.sfxBase = sfxBase;
        this.remoteIp = remoteIp;
    }

    resolve(sfxUrl) {
        return new Promise((resolve, reject) => {
            let {
                sfxUrl: baseUrl,
                query: body
            } = this._buildResolveUrl(sfxUrl);
            console.log(`${baseUrl}?${body}`);

            let xhr = new XMLHttpRequest();
            xhr.open("POST", `${baseUrl}?${body}`, true);
            xhr.setRequestHeader("Content-Type", "application/xml");
            xhr.onload = () => {resolve(this.responseXML);};
            xhr.onerror = () => {
                console.log('SFX Error1:', this);
                reject(`SFX Error1: ${this.responseXML}`);
            }            

            xhr.send(""); 

            // fetch(`${baseUrl}?${body}`, {
            //     method: 'POST',
            //     mode: 'cors',
            //     headers: {'Content-Type':'application/xml'}
            // }).then((response) => {
            //     if (response.ok) {
            //         resolve(response.text());
            //     } else {
            //         console.log('SFX Error1:', response);
            //         reject(`SFX Error1: ${response.statusText}`);
            //     }
            // }).catch((e) => {
            //     console.log('SFX Error2', e);
            // });
        });
    }

    _url2Data(sfxUrl) {
        let location = document.createElement('a');
        location.href = sfxUrl;
        return location.search.slice(1).split('&').map(m => {
            let r = m.split('=');
            return  r[1].length > 0 ? {
                [r[0]]: decodeURIComponent(r[1])
            } : null
        }).filter(f => f !== null).reduce((p, c) => Object.assign(p, c), {});
    }

    _buildResolveUrl(sfxUrl) {
        let data = this._url2Data(sfxUrl);
        let rftObj = Object.keys(data).filter(f => /^rft\./.test(f)).map(m => {
            let tag = m.replace('rft.', 'rft:');
            return `<${tag}>${data[m]}</${tag}>`
        }).join("\n");
        let services = '';
        services += '<sv:any xmlns:sv="info:ofi/fmt:xml:xsd:sch_svc">yes</sv:any>';

        let contextObject = `<?xml version='1.0' encoding='UTF-8' ?>
<ctx:context-objects xsi:schemaLocation='info:ofi/fmt:xml:xsd:ctx http://www.openurl.info/registry/docs/info:ofi/fmt:xml:xsd:ctx' xmlns:ctx='info:ofi/fmt:xml:xsd:ctx' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'>
<ctx:context-object timestamp='${data["ctx_tim"].replace('IST', 'Z')}' version='${data["ctx_ver"]}' identifier='001'>
<ctx:referent>
    <ctx:metadata-by-val>
    <ctx:format>info:ofi/fmt:kev:mtx:journal</ctx:format>
    <ctx:metadata>
    <rft:journal
        xmlns:rft='info:ofi/fmt:kev:mtx:journal'>
    ${rftObj}
    <rft:object_id></rft:object_id>
    </rft:journal>
    </ctx:metadata>
    </ctx:metadata-by-val>
    </ctx:referent>
    <ctx:requester>
    <ctx:metadata-by-val>
    <ctx:format>info:ofi/req</ctx:format>
    <ctx:metadata>
    <req:ip xmlns:req='info:ofi/req'>${this.remoteIp}</req:ip>
    </ctx:metadata>
    </ctx:metadata-by-val>
    </ctx:requester>
    <ctx:service-type>
    <ctx:metadata-by-val>
    <ctx:format>info:ofi/fmt:xml:xsd:sch_svc</ctx:format>
    <ctx:metadata>
    ${services}
    </ctx:metadata>
    </ctx:metadata-by-val>
    </ctx:service-type>
    <ctx:referrer>
    <ctx:identifier>${data['rfr_id']}</ctx:identifier>
    </ctx:referrer>
</ctx:context-object>
</ctx:context-objects>`;

        //console.log(contextObject);        

        let query = encodeURI(`url_ctx_val=${contextObject}&url_ctx_fmt=info:ofi/fmt:xml:xsd:ctx&sfx.response_type=multi_obj_xml&res_id=${this.sfxBase}`);

        return {
            sfxUrl: `${this.sfxBase}`,
            query: query
        };
    }
}


// let u = "https://sfx.metabib.ch/sfx_ilu?ctx_ver=Z39.88-2004&ctx_enc=info:ofi/enc:UTF-8&ctx_tim=2018-07-19T19%3A54%3A21IST&url_ver=Z39.88-2004&url_ctx_fmt=infofi/fmt:kev:mtx:ctx&rfr_id=info:sid/primo.exlibrisgroup.com:primo3-Journal-41ZBL_EBC_DDA&rft_val_fmt=info:ofi/fmt:kev:mtx:book&rft.genre=book&rft.atitle=&rft.jtitle=&rft.btitle=Urheberrechtliche%20Aspekte%20des%20Cloud%20Computing%20im%20Bereich%20der%20Lizenzierung%20von%20Filmwerken&rft.aulast=Crackau&rft.auinit=A&rft.auinit1=&rft.auinitm=&rft.ausuffix=&rft.au=Crackau,%20Andy&rft.aucorp=&rft.volume=&rft.issue=&rft.part=&rft.quarter=&rft.ssn=&rft.spage=&rft.epage=&rft.pages=&rft.artnum=&rft.issn=&rft.eissn=&rft.isbn=3631647417&rft.sici=&rft.coden=&rft_id=info:doi/&rft.object_id=&svc_val_fmt=info:ofi/fmt:kev:mtx:sch_svc&svc.fulltext=yes&rft_dat=%3C41ZBL_EBC_DDA%3EEBC1689176%3C/41ZBL_EBC_DDA%3E%3Curl%3E%3C/url%3E&rft.eisbn=&rft_id=info:oai/&req.language=ger&rft_pqid=&rft_id=info:pmid/";
// let s = new SfxResolve('http://sfx.metabib.ch/sfx_ilu', '147.88.207.12');
// s.resolve(u).then(r => {console.log(r)}).catch(e => console.log(e)); 