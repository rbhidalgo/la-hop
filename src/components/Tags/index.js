import React, { Component } from 'react';
import TagButtons from 'react-tag-buttons';
 
 
const tagsList = [
    {id:1, text:"Food"},
    {id:2, text:"Clothing"},
    {id:3, text:"Mental Health Care"},
    {id:4, text:"General Assistance"}
];
 
class Tags extends Component {
    constructor(props){
        super(props);
 
        this.state = {
            selectedDataSource: []
        };
    }
 
    onTagClick = (currSelectedState, id, text) => {
        let {selectedDataSource} = this.state;
        if(!currSelectedState){
            selectedDataSource.push({id:id, text:text});
        }else{
            selectedDataSource = selectedDataSource.filter((item)=>{return item.id !== id});
        }
        this.setState({
            selectedDataSource: selectedDataSource
        });
    };
 
    render() {
        const {selectedDataSource} = this.state;
 
        return (
            <div>
                <TagButtons
                    dataSource={tagsList}
                    selectedDataSource={selectedDataSource}
                    onTagClick={this.onTagClick}
                    className="tagBtns"
                />
            </div>
        );
    }
}
 

export default Tags