

var button = document.getElementById("btnCreate")

button.onclick = function(){

    var sodongID = document.getElementById("sodong")
    var socotID = document.getElementById("socot")

    var sodong = parseInt(sodongID.value)
    var socot = parseInt(socotID.value)


    var tagTable = document.createElement("table")
    var divID = document.getElementById("container")

    for (i = 0 ; i < sodong ; i++){0

        var tagTR = document.createElement("tr")
        tagTable.appendChild(tagTR)

        for (j = 0 ; j < socot; i++){
            var tagTD = document.createElement("td")
            var TextNode = document.createTextNode(i + " " + j)

            tagTD.appendChild(TextNode)
            tagTR.appendChild(tagTD)
        }

    }

    divID.appendChild(tagTable)

    return true;


    }

