import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        const{ title, description, imageurl,newurl,author, date,source}=this.props
        return (
            <div>
                <div className="card" style={{width : "18rem"}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageurl? "https:fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcements/-476x249w4/gsmarena_00.jpg":imageurl } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By  {!author?"Unknown": author} on {new Date (date).toGMTString()}</small></p>
                        <a href={newurl} rel="noreferrer" target='_blank' className="btn btn-dark">Go somewhere</a>
                    </div>
                </div>   
            </div>
        )
    }
}
