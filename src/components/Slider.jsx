import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import "./Slider.css"

const AutoplaySlider = withAutoplay(AwesomeSlider);


const Slider = () => (
    <AutoplaySlider
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={2000}
        mobileTouch
    >
      {Array.from({length: 10}, (_, i) => i + 1).map(num => <div key={num} data-src={`../../${num}.jpg`}/>)}
    </AutoplaySlider>
);

export default Slider