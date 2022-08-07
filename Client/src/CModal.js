import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Modal.css'

class CModal extends Component {
    render() {
        return (
            <div className="modal show fade" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.8)', }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">{this.props.title}</h2>
                            <Button type="button" className="btn-close" onClick={this.props.hide} />
                        </div>
                        <div className="modal-body">
                            <img src={this.props.img} className="img-fluid" alt='' />
                            <p>{this.props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CModal