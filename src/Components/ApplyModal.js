import React from 'react'

export default function ApplyModal()
{
    return (
        <a href="#">

            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                APPLY
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Alert!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Login to apply!
                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}