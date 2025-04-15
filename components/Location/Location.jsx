import React, { useEffect, useRef } from 'react';
import styles from './loc.module.css';
import Link from 'next/link';

const Location = () => {
  const mapLink = 'https://2gis.kz/nur_sultan/firm/70000001096097233';
  const mapRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.DG.then(() => {
        const map = window.DG.map(mapRef.current, {
          center: [51.162619748263275, 71.4079785346985],
          zoom: 16,
        });
        window.DG.marker([51.162619748263275, 71.4079785346985])
          .addTo(map)
          .bindPopup('Nomad stroy project');
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="container">
      <div className={styles.locContainer}>
        <video className={styles.video} src="./video.mp4" autoPlay loop muted playsInline></video>
        <div className={styles.mapWrapper}>
          <Link href={mapLink} target="_blank" rel="noopener noreferrer">
            <div ref={mapRef} className={styles.map}></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Location;