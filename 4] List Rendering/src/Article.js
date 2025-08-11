export default function Article({title, author, date, time, children}) {
    
    
    if (title == null || title === "") {
        return null
    }
    else {
        return(
                <div id={'post'}>
                    <div id={'headPost'}>
                        <div>Author: <span className={'author'}>{author}</span></div>
                        <div>Date: <span className={'date'}>{date}</span></div>
                        <div>Title: <span className={'titlePost'}>{title}</span></div>
                    </div>
                    <hr/>
                    <p className={'content'}>
                        {children}
                    </p>
                </div>
        )
    }
}