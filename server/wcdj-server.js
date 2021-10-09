let http=require('http')
let url=require('url')


let serverPort = parseInt(process.argv[2] !== undefined ? process.argv[2] : '3001')
let words={
    'demo': {
         'word': 100
        ,'words': 91
        ,'sprite': 86
        ,'placed': 72
        ,'layout': 64
        ,'algorithm': 64
        ,'area': 64
        ,'without': 52
        ,'step': 52
        ,'bounding': 52
        ,'retrieve': 52
        ,'operation': 52
        ,'collision': 52
        ,'candidate': 52
        ,'32': 37
        ,'placement': 37
        ,'time': 37
        ,'possible': 37
        ,'even': 37
        ,'simple': 37
        ,'starting': 37
        ,'previously': 37
        ,'move': 37
        ,'perform': 37
        ,'hierarchical': 37
        ,'draw': 37
        ,'pixel': 37
        ,'data': 37
        ,'separately': 37
        ,'expensive': 37
        ,'pixels': 37
        ,'masks': 37
        ,'implementation': 37
        ,'detection': 37
        ,'larger': 37
        ,'whole': 37
        ,'comparing': 37
        ,'box': 37
        ,'large': 37
        ,'think': 37
        ,'version': 37
        ,'single': 37
        ,'tree': 37
        ,'Cloud': 10
        ,'Generator': 10
        ,'Works': 10
        ,'positioning': 10
        ,'overlap': 10
        ,'available': 10
        ,'GitHub': 10
        ,'open': 10
        ,'source': 10
        ,'license': 10
        ,'d3cloud': 10
        ,'Note': 10
        ,'code': 10
        ,'converting': 10
        ,'text': 10
        ,'rendering': 10
        ,'final': 10
        ,'output': 10
        ,'requires': 10
        ,'additional': 10
        ,'development': 10
        ,'quite': 10
        ,'slow': 10
        ,'hundred': 10
        ,'run': 10
        ,'asynchronously': 10
        ,'configurable': 10
        ,'size': 10
        ,'makes': 10
        ,'animate': 10
        ,'stuttering': 10
        ,'recommended': 10
        ,'always': 10
        ,'use': 10
        ,'animations': 10
        ,'prevents': 10
        ,'browsers': 10
        ,'event': 10
        ,'loop': 10
        ,'blocking': 10
        ,'placing': 10
        ,'incredibly': 10
        ,'important': 10
        ,'Attempt': 10
        ,'place': 10
        ,'point': 10
        ,'usually': 10
        ,'near': 10
        ,'middle': 10
        ,'somewhere': 10
        ,'central': 10
        ,'horizontal': 10
        ,'line': 10
        ,'intersects': 10
        ,'one': 10
        ,'along': 10
        ,'increasing': 10
        ,'spiral': 10
        ,'Repeat': 10
        ,'intersections': 10
        ,'found': 10
        ,'hard': 10
        ,'part': 10
        ,'making': 10
        ,'efficiently': 10
        ,'According': 10
        ,'Jonathan': 10
        ,'Feinberg': 10
        ,'Wordle': 10
        ,'uses': 10
        ,'combination': 10
        ,'boxes': 10
        ,'quadtrees': 10
        ,'achieve': 10
        ,'reasonable': 10
        ,'speeds': 10
        ,'Glyphs': 10
        ,'JavaScript': 10
        ,'isnt': 10
        ,'way': 10
        ,'precise': 10
        ,'glyph': 10
        ,'shapes': 10
        ,'via': 10
        ,'DOM': 10
        ,'except': 10
        ,'perhaps': 10
        ,'SVG': 10
        ,'fonts': 10
        ,'Instead': 10
        ,'hidden': 10
        ,'canvas': 10
        ,'element': 10
        ,'Retrieving': 10
        ,'many': 10
        ,'batch': 10
        ,'Sprites': 10
        ,'initial': 10
        ,'performed': 10
        ,'using': 10
        ,'doesnt': 10
        ,'copy': 10
        ,'appropriate': 10
        ,'position': 10
        ,'representing': 10
        ,'advantage': 10
        ,'involves': 10
        ,'relevant': 10
        ,'rather': 10
        ,'previous': 10
        ,'Somewhat': 10
        ,'surprisingly': 10
        ,'lowlevel': 10
        ,'hack': 10
        ,'made': 10
        ,'tremendous': 10
        ,'difference': 10
        ,'constructing': 10
        ,'compressed': 10
        ,'blocks': 10
        ,'1bit': 10
        ,'32bit': 10
        ,'integers': 10
        ,'thus': 10
        ,'reducing': 10
        ,'number': 10
        ,'checks': 10
        ,'memory': 10
        ,'times': 10
        ,'fact': 10
        ,'turned': 10
        ,'beat': 10
        ,'quadtree': 10
        ,'everything': 10
        ,'tried': 10
        ,'areas': 10
        ,'font': 10
        ,'sizes': 10
        ,'primarily': 10
        ,'needs': 10
        ,'test': 10
        ,'per': 10
        ,'whereas': 10
        ,'compare': 10
        ,'every': 10
        ,'overlaps': 10
        ,'slightly': 10
        ,'Another': 10
        ,'possibility': 10
        ,'merge': 10
        ,'fairly': 10
        ,'though': 10
        ,'compared': 10
        ,'analagous': 10
        ,'mask': 10
        ,'essentially': 10
        ,'ORing': 10
        ,'block': 10
        ,'': 10        
    }
}

console.log('Serving WordCloud-DJ on:' + serverPort)

http.createServer((req, res) => {
    const query = url.parse(req.url,true).query
    if ('cloud' in query) {
        if (!(query.cloud in words)) {
            console.log('New cloud: ' + query.cloud)
            words[query.cloud]={}
        }

        if ('word' in query) {
            if (query.word in words[query.cloud]) {
                words[query.cloud][query.word]++
            } else {
                words[query.cloud][query.word]=1
            }
            console.log(query.word + ": " + words[query.cloud][query.word])
            res.writeHead(200, {'Content-Type': 'text/html', 
                                'Access-Control-Allow-Origin': '*'})
            res.end('Thank you for contributing: ' + query.word);
        } else {
            res.writeHead(200, {'Content-Type': 'application/json', 
                                'Access-Control-Allow-Origin': '*'})
            res.end(JSON.stringify(words[query.cloud]))
        }
    } else {
        res.writeHead(500, {'Content-Type': 'text/html', 
                            'Access-Control-Allow-Origin': '*'})
        res.end('Not found')
    }
}).listen(serverPort);


