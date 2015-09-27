function loader() {
    srcCode.value = 'story=0 sequence_blocks=4 iterative_depth=2 paragraphs=2 sentences=13 season=0 weapon=0 realization=(+) story_state_machine=[]'
    return
}
// function loader ()

function clear_window() {
    srcTranslated.value = ''
    return
}
// clear_window ()

function MD5() {
    srcTranslated.value = Math.md5(srcCode.value)
    return
}
// generate_MD5 ()

function translatorTool() {
/*

0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

200: OK
404: page not found

*/
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(data){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){        
            xmlDoc=JSON.parse(xmlhttp.response);
            srcTranslated.value = 'apple - '+xmlDoc['apple'][0][3]
        } else if (xmlhttp.readyState==3) {
            srcTranslated.value = 'Processing..'
        }
    }
    xmlhttp.open("GET","mysql-wn-data.synsets_II.sql.jet",true)
    xmlhttp.send();
}
// translatorTool ()
