function sugerir(){
var resp = window.document.getElementsByName("gs")
var sugestao = window.document.getElementById("sugestao")

    if(resp[0].checked){
        var r = Math.floor((Math.random() * 5) + 1);
        if(r == 1){
            sugestao.innerHTML = 'My sugestion to you is Rolling Stones - Cant You Hear Me Knocking <br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/Gz5mI6tqm_Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if (r == 2){
            sugestao.innerHTML = 'My sugestion to you is Rolling Stones - Its Only Rock n Roll (But I Like It) <br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/DmgCy__eUa8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(r == 3){
            sugestao.innerHTML = 'My sugestion to you is The Jimi Hendrix Experience - All Along The Watchtower<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/TLV4_xaYynY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(r == 4){
            sugestao.innerHTML = 'My sugestion to you is The Beatles - Helter Skelter<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/vWW2SzoAXMo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else{
            sugestao.innerHTML = 'My sugestion to you is Pink Floyd - Young Lust<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/YiVPC8QHsQM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
            
        }
    }
    else if(resp[1].checked){
        var r = Math.floor((Math.random() * 4) + 1);
        if(r == 1){
            sugestao.innerHTML = 'My sugestion to you is Pearl Jam - State Of Love And Trust<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/uYjM-BuE3Cs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(r == 2){
            sugestao.innerHTML = 'My sugestion to you is Nirvana - Milk It<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/in58wtVI9sI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(r == 3){
            sugestao.innerHTML = 'My sugestion to you is Nirvana - Paper Cuts<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/HMDGO8RjJEg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else{
            sugestao.innerHTML = 'My sugestion to you is Alice In Chains - Would<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/JB_fNVOPzyM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    }else if(resp[2].checked){
        var r = Math.floor((Math.random() * 5) + 1);
        if(r == 1){
            sugestao.innerHTML = 'My sugestion to you is Kings of Leon - Going Nowhere<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/fSXGQyi37ik" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(r == 2){
            sugestao.innerHTML = 'My sugestion to you is Kings of Leon - Birthday<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/F17LlYwbtJE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(r == 3){
            sugestao.innerHTML = 'My sugestion to you is Arctic Monkeys - Do I Wanna Know?<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/bpOSxM0rNPM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(r == 4){
            sugestao.innerHTML = 'My sugestion to you is The Strokes - Someday<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/knU9gRUWCno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

        }else{
            sugestao.innerHTML = 'My sugestion to you is The Black Keys - Little Black Submarines<br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/6k8es2BNloE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    }
}