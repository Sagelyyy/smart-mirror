import React from "react";
const error = "something went wrong"



export default class Affirmation extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            affirm: ""
        }
    }

    async fetchAffirmationData(){
        const url = `https://thingproxy.freeboard.io/fetch/https://www.affirmations.dev/`;
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json')
        try{
        const response = fetch(url, { mode: 'cors'})
        return await ( await response).json()
        }catch{
            console.log(error)
        }
    }

    async parseData(){
        let affirmData = await this.fetchAffirmationData()
        .then(response => this.setState({
            affirm: response.affirmation
         }))
        return await affirmData
    }

    componentDidMount(){
        this.parseData()
        this.timerID = setInterval( () => 
        this.parseData(), 86400000)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    render(){
        return(
            <div>
                <h3>Your Daily Affirmation:</h3>
                <h4>{this.state.affirm}</h4>
            </div>
        )
    }
}