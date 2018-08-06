import React from 'react';
import { Component } from 'react';
import './search.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = (e)=>{
            e.preventDefault()
            let data = {
                term:this.refs.term.value,
                start_date:this.refs.start_date.value,
                end_date:this.refs.end_date.value
            }
            this.props.handleSubmit(data)
        }
    }
    render() { 
        return ( 
            <div className="ui segment form-Segment">
            <form className="ui form" onSubmit={this.onSubmit}>
                <h4 className="ui dividing header">Search Articles</h4>
                <div className="field">
                     <label>Search Term</label>
                    <div className="field">
                        <div className="ui right action left icon input">
                            <i className="search icon"></i>
                            <input type="text" name="term" placeholder="Enter search term" ref="term"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                     <label>Date Range</label>
                        <div className="two fields">
                            <div className="field">
                                <div className="ui labeled input">
                                    <div className="ui label">
                                         Start Date
                                    </div>
                                    <input type="date" name="start_date" ref="start_date"/>
                                </div>
                            </div>
                            <div className="field">
                            <div className="ui labeled input">
                            <div className="ui label">
                                 End Date
                            </div>
                            <input type="date" name="end_date" ref="end_date"/>
                        </div>
                            </div>
                        </div>
                </div>
                <button type="submit"  className="ui inverted orange button"> Submit</button>
            </form>
        </div> 
     );
    }
}
  
 
export default Form;