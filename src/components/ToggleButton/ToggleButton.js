import React from 'react';

const ToggleIconButton = ({active, activeSrc, deactiveSrc, onClick}) => {
  const iconSrc = active ? activeSrc: deactiveSrc
  return (
    <button onClick={onClick}>
      <img src={iconSrc} alt=""/>
    </button>
  );
};




class ToggleButton extends Component {
  state = {on: false}
  toggle = () => {
    this.setState(
      currentState => ({on: !currentState.on}),
      ()=>{
        this.props.onToggle(this.state.on)
      }
    )
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}





// export default ToggleButton;