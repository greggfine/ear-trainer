import React, { Component } from 'react';

const context = new (window.AudioContext || window.webkitAudioContext)();


class Play_Rand_Int extends Component {
    constructor(props){
        super(props)

        this.state = {
            context: context,
            oscType: 'sine',
        }

        this.init = this.init.bind(this)
        this.play = this.play.bind(this)
        this.stop = this.stop.bind(this)

    }
    init() {
        this.oscillator = this.state.context.createOscillator();
        this.gainNode = this.state.context.createGain();
    
        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.state.context.destination);
        this.oscillator.type = this.state.oscType;
      }
    
      play(value, time, gainLevel) {
        this.init();

        this.oscillator.frequency.value = value;
        this.gainNode.gain.value = gainLevel;
        this.oscillator.start(time);
        this.stop(time);
      }
    
      stop(time) {
        this.gainNode.gain.exponentialRampToValueAtTime(0.100, time + 1);
        this.oscillator.stop(time + 1);
      }

    render() {
        return (
            <div>
                <button onClick={this.play(440, 0, 1.0)}>Play Random Interval</button>
            </div>
        )
    }
}

export default Play_Rand_Int;