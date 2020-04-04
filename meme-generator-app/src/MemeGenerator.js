import React from 'react';

// Since ye API call karega => `Class Component`
class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.hanleChange = this.hanleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            // .then(jsonData => console.log("data -", jsonData))
            .then(jsonData => jsonData.data.memes)
            .then(memesArray => {
                // console.log("memesArray[0] ->", memesArray[0]);
                this.setState({
                    allMemeImgs: memesArray
                })
            })
    }

    hanleChange(event) {
        
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        
        const len = this.state.allMemeImgs.length;
        const randomIndex = Math.floor(Math.random() * len);
        const randomMemeImg = this.state.allMemeImgs[randomIndex].url;
        console.log("randomMemeImg => ", randomMemeImg);
        this.setState({
            randomImg: randomMemeImg
        })


        event.preventDefault();
    }

    render() {
        return (

            <div>
                <form
                    onSubmit={this.handleSubmit}
                    className="meme-form"
                >
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.hanleChange}
                        placeholder="Top Text"
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.hanleChange}
                        placeholder="Bottom Text"
                    />

                    <button>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;