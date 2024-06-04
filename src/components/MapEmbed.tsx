// components/MapEmbed.js

const MapEmbed = () => {
    return (
      <div style={{ width: '100%', height: '500px', position: 'relative'}}>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1ZlibUw502zgtFJng0gCSN5Gfhio&ll=16.37800315499678%2C108.55330641067111&z=6"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    );
  };
  
  export default MapEmbed;
  