
const articles = [
        {id:1,title:'Title ',meta:'2017-02-03-',content:'Content content '},
        {id:2,title:'Title ',meta:'2017-02-03-',content:'Content content '},
        {id:3,title:'Title ',meta:'2017-02-03-',content:'Content content '},
        {id:4,title:'Title ',meta:'2017-02-03-',content:'Content content '},
        {id:5,title:'Title ',meta:'2017-02-03-',content:'Content content '}
    ]


export default{
    get_articles(reqBody) {
        return new Promise((resolve,reject)=>{
            reqBody.articles = articles;
            reqBody.total = 200;
            reqBody.size = 5
            setTimeout(resolve(reqBody),1000);
        })
    }
}