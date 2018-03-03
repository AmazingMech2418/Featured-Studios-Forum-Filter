function filter(element) {
    var siteinfo = element.innerHTML;
    var sitedata;
var filterer = "edu/projects";
    if(siteinfo.search("edu/projects/")!==-1) {
        sitedata = siteinfo;
        siteinfo=sitedata.replace(/edu\/projects/g,'edu/(This thread is for STUDIOS not projects. This post is irrelevant to the thread.)');
    }
    element.innerHTML=siteinfo;
}
filter(document.getElementsByTagName("body")[0]);
