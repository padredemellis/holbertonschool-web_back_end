export default function loadBalancer(chinaDownload, USDonwload){
    return Promise.race([chinaDownload,USDonwload]);
}