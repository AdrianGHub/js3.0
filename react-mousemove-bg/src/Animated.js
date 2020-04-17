import React, { Component } from 'react';



class Animated extends Component {

    state = {
        posX: 0,
        posY: 0
    }

    componentDidMount() {
        document.addEventListener('mousemove', (e) => this.setNewPosition(e));
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', (e) => this.setNewPosition(e));
    }

    setNewPosition(e) {
        const { clientX, clientY } = e;
        const { ratioX, ratioY } = this.props;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const posX = clientX - centerX;
        const posY = clientY - centerY;


        this.setState({
            posX: posX * -ratioX,
            posY: posY * -ratioY
        })
    }

    render() {
        const { className, src } = this.props;
        const { posX, posY } = this.state;

        return (
            <img 
                className={className}
                src={src}
                style={{
                    transform: `translate(${posX}px, ${posY}px)`
                }}
                alt=""
            />
        )
    }

}

export default Animated;