import AboutmeTile from './AboutmeTile';

function AboutmeBox({ aboutmearray }) {
  return (
    <div>
      {aboutmearray.map((sentence) => (
        <AboutmeTile key={sentence.id} sentence={sentence} />
      ))}
    </div>
  );
}

export default AboutmeBox;