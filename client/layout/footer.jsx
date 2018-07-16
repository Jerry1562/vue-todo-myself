/*this指向的是函数被创建时this所指向的值，与ES5不同*/
/*.jsx文件的特点就是用允许用JS包裹HTML代码，利用JS的强大功能为HTML的编写提供便利*/
import '../assets/styles/footer.styl'

export default {
    data(){
        return {
            author:'Jerry'
        }

    },
    render(){
        return (
            <div id="footer">
            <span>Writen by {this.author}</span>   
            </div>
        )
    }
}