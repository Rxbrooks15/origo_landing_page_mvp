import React, { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Stars, OrbitControls, useTexture, Line, Html } from '@react-three/drei';
import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Ripple
// ---------------------------------------------------------------------------
const Ripple = ({ position, onComplete, delay = 0 }) => {
  const meshRef = useRef(null);
  const startTime = useRef(Date.now() + delay);
  const duration = 4000;

  useEffect(() => {
    if (meshRef.current) meshRef.current.lookAt(position.clone().multiplyScalar(2));
  }, [position]);

  useFrame(() => {
    if (!meshRef.current) return;
    const now = Date.now();
    if (now < startTime.current) { meshRef.current.visible = false; return; }
    meshRef.current.visible = true;
    const progress = Math.min((now - startTime.current) / duration, 1);
    const scale = progress * 1.2;
    meshRef.current.scale.set(scale, scale, scale);
    if (meshRef.current.material instanceof THREE.MeshBasicMaterial)
      meshRef.current.material.opacity = Math.pow(1 - progress, 2) * 0.5;
    if (progress >= 1) onComplete();
  });

  return (
    <mesh ref={meshRef} position={position}>
      <ringGeometry args={[0.95, 1, 64]} />
      <meshBasicMaterial color="#60a5fa" transparent opacity={0.5}
        side={THREE.DoubleSide} depthWrite={false} toneMapped={false} />
    </mesh>
  );
};

// ---------------------------------------------------------------------------
// RippleEffect
// ---------------------------------------------------------------------------
const RippleEffect = ({ ripples, onRemove }) => (
  <group>
    {ripples.map((ripple) => (
      <React.Fragment key={ripple.id}>
        <Ripple position={ripple.position} onComplete={() => onRemove(ripple.id)} />
        <Ripple position={ripple.position} delay={200} onComplete={() => {}} />
        <Ripple position={ripple.position} delay={400} onComplete={() => {}} />
        <Ripple position={ripple.position} delay={600} onComplete={() => {}} />
        <Ripple position={ripple.position} delay={800} onComplete={() => {}} />
      </React.Fragment>
    ))}
  </group>
);

// ---------------------------------------------------------------------------
// Graticule
// ---------------------------------------------------------------------------
const Graticule = () => {
  const lines = useMemo(() => {
    const linesArray = [];
    const radius = 1.005;
    const segments = 120;
    for (let lat = -75; lat <= 75; lat += 15) {
      const points = [];
      const y = radius * Math.sin(THREE.MathUtils.degToRad(lat));
      const r = radius * Math.cos(THREE.MathUtils.degToRad(lat));
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r));
      }
      linesArray.push(<Line key={`lat-${lat}`} points={points} color="#ffffff" opacity={0.1} transparent lineWidth={0.5} />);
    }
    for (let lon = 0; lon < 180; lon += 15) {
      const points = [];
      const phi = THREE.MathUtils.degToRad(lon);
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(
          radius * Math.sin(theta) * Math.cos(phi),
          radius * Math.cos(theta),
          radius * Math.sin(theta) * Math.sin(phi)
        ));
      }
      linesArray.push(<Line key={`lon-${lon}`} points={points} color="#ffffff" opacity={0.1} transparent lineWidth={0.5} />);
    }
    return linesArray;
  }, []);
  return <group>{lines}</group>;
};

// ---------------------------------------------------------------------------
// Locations
// ---------------------------------------------------------------------------
const LOCATIONS = [
  { name: "Austin",        lat: 30.267,  lon: -97.743  },
  { name: "Houston",       lat: 29.760,  lon: -95.370  },
  { name: "Los Angeles",   lat: 34.052,  lon: -118.244 },
  { name: "San Francisco", lat: 37.775,  lon: -122.419 },
  { name: "New York",      lat: 40.713,  lon: -74.006  },
  { name: "Atlanta",       lat: 33.749,  lon: -84.388  },
  { name: "Chicago",       lat: 41.878,  lon: -87.630  },
  { name: "Seattle",       lat: 47.606,  lon: -122.332 },
  { name: "Accra",         lat: 5.604,   lon: -0.187   },
  { name: "London",        lat: 51.507,  lon: -0.128   },
  { name: "Barcelona",     lat: 41.385,  lon: 2.173    },
  { name: "Mexico City",   lat: 19.433,  lon: -99.133  },
  { name: "Paris",         lat: 48.857,  lon: 2.352    },
  { name: "Tokyo",         lat: 35.676,  lon: 139.650  },
  { name: "Beijing",       lat: 39.904,  lon: 116.407  },
  { name: "Sydney",        lat: -33.869, lon: 151.209  },
  { name: "Cairo",         lat: 30.044,  lon: 31.236   },
  { name: "Rio de Janeiro",lat: -22.907, lon: -43.173  },
  { name: "Moscow",        lat: 55.756,  lon: 37.617   },
  { name: "New Delhi",     lat: 28.614,  lon: 77.209   },
  { name: "Berlin",        lat: 52.520,  lon: 13.405   },
  { name: "Rome",          lat: 41.903,  lon: 12.496   },
  { name: "Madrid",        lat: 40.417,  lon: -3.704   },
  { name: "Seoul",         lat: 37.567,  lon: 126.978  },
  { name: "Singapore",     lat: 1.352,   lon: 103.820  },
  { name: "Bangkok",       lat: 13.756,  lon: 100.502  },
  { name: "Istanbul",      lat: 41.008,  lon: 28.978   },
  { name: "Dubai",         lat: 25.205,  lon: 55.271   },
  { name: "Nairobi",       lat: -1.292,  lon: 36.822   },
  { name: "Cape Town",     lat: -33.925, lon: 18.424   },
  { name: "Lagos",         lat: 6.524,   lon: 3.379    },
  { name: "Buenos Aires",  lat: -34.604, lon: -58.382  },
  { name: "Lima",          lat: -12.046, lon: -77.043  },
  { name: "Toronto",       lat: 43.653,  lon: -79.383  },
  { name: "Hong Kong",     lat: 22.319,  lon: 114.169  },
];

const STATIC_METRICS = {
  "Houston": {
    uploadedNovas: 1284, collectedNovacranes: 842, activeUsers: 391,
    storiesShared: 217, journeysStarted: 89, memoryPins: 64,
    communitySignals: 1430, growthRate: "+18%", lastActivity: "Today",
  },
};

const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const growthOptions   = ["+5%","+8%","+11%","+14%","+17%","+21%","+24%","+28%","+32%"];
const activityOptions = ["Just now","2 hrs ago","5 hrs ago","8 hrs ago","12 hrs ago","Yesterday","2 days ago"];

const randomMetrics = () => ({
  uploadedNovas:       rnd(300,  2500),
  collectedNovacranes: rnd(200,  1800),
  activeUsers:         rnd(50,   1200),
  storiesShared:       rnd(20,    400),
  journeysStarted:     rnd(10,    200),
  memoryPins:          rnd(5,     120),
  communitySignals:    rnd(400,  2200),
  growthRate:          growthOptions[rnd(0, growthOptions.length - 1)],
  lastActivity:        activityOptions[rnd(0, activityOptions.length - 1)],
});

const getPoints = (radius = 1.01) =>
  LOCATIONS.map((loc, index) => {
    const phi   = (90 - loc.lat) * (Math.PI / 180);
    const theta = (loc.lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z =   radius * Math.sin(phi) * Math.sin(theta);
    const y =   radius * Math.cos(phi);
    return {
      position: new THREE.Vector3(x, y, z),
      color: "#60a5fa",
      id: index + 1,
      label: loc.name,
      location: loc.name,
      lat: loc.lat,
      lon: loc.lon,
      metrics: STATIC_METRICS[loc.name] ?? randomMetrics(),
    };
  });

// ---------------------------------------------------------------------------
// ConnectionArcs
// ---------------------------------------------------------------------------
const ConnectionArcs = () => {
  const arcs = useMemo(() => {
    const pts = getPoints(1.01);
    const connections = [];
    for (let i = 0; i < pts.length; i++) {
      const usedTargets = new Set();
      while (usedTargets.size < 3) {
        const targetIndex = Math.floor(Math.random() * pts.length);
        if (targetIndex === i || usedTargets.has(targetIndex)) continue;
        usedTargets.add(targetIndex);
        const start = pts[i].position;
        const end   = pts[targetIndex].position;
        const midPoint = new THREE.Vector3()
          .addVectors(start, end)
          .multiplyScalar(0.5)
          .normalize()
          .multiplyScalar(1.65);
        const curve = new THREE.QuadraticBezierCurve3(start, midPoint, end);
        connections.push(
          <Line
            key={`arc-${i}-${targetIndex}`}
            points={curve.getPoints(50)}
            color="#a855f7"
            opacity={0.3}
            transparent
            lineWidth={1.5}
            toneMapped={false}
          />
        );
      }
    }
    return connections;
  }, []);
  return <group>{arcs}</group>;
};

// ---------------------------------------------------------------------------
// Popup
// ---------------------------------------------------------------------------
const Popup = ({ pt, isSelected }) => {
  if (isSelected) {
    // Half the hover popup size + slightly smaller text
    return (
      <Html distanceFactor={20} position={[0, 0.02, 0]}>
        <div style={{
          background: 'rgba(0,0,0,0.85)',
          border: '1px solid rgba(255,255,255,0.18)',
          borderRadius: '4px',
          padding: '3px 5px',
          color: '#fff',
          pointerEvents: 'none',
          fontFamily: 'monospace',
          textAlign: 'center',
          boxShadow: '0 2px 12px rgba(0,0,0,0.6)',
          whiteSpace: 'nowrap',
        }}>
          <div style={{ fontSize: '1.8px', fontWeight: 900, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.5px' }}>
            {pt.label}
          </div>
          <div style={{ fontSize: '1.3px', color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5px' }}>
            Users
          </div>
          <div style={{ fontSize: '2.4px', fontWeight: 700 }}>
            {pt.metrics.activeUsers.toLocaleString()}
          </div>
        </div>
      </Html>
    );
  }

  // Full hover popup
  return (
    <Html distanceFactor={10} position={[0, 0.02, 0]}>
      <div style={{
        background: 'rgba(0,0,0,0.88)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '6px',
        padding: '5px 7px',
        color: '#fff',
        pointerEvents: 'none',
        minWidth: '90px',
        fontFamily: 'monospace',
        boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
      }}>
        <div style={{ fontSize: '5.5px', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2px', textAlign: 'center' }}>
          {pt.label}
        </div>
        <div style={{ fontSize: '3.5px', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginBottom: '4px', letterSpacing: '0.08em' }}>
          {pt.lat.toFixed(2)}°, {pt.lon.toFixed(2)}°
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginBottom: '4px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 8px' }}>
          {[
            { label: 'Users',    value: pt.metrics.activeUsers.toLocaleString() },
            { label: 'Growth',   value: pt.metrics.growthRate },
            { label: 'Novas',    value: pt.metrics.uploadedNovas.toLocaleString() },
            { label: 'Cranes',   value: pt.metrics.collectedNovacranes.toLocaleString() },
            { label: 'Stories',  value: pt.metrics.storiesShared.toLocaleString() },
            { label: 'Journeys', value: pt.metrics.journeysStarted.toLocaleString() },
            { label: 'Pins',     value: pt.metrics.memoryPins.toLocaleString() },
            { label: 'Signals',  value: pt.metrics.communitySignals.toLocaleString() },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontSize: '3px', color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
              <div style={{ fontSize: '5px', fontWeight: 700 }}>{value}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '4px', paddingTop: '3px', fontSize: '3px', color: 'rgba(255,255,255,0.35)', textAlign: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Last active: {pt.metrics.lastActivity}
        </div>
      </div>
    </Html>
  );
};

// ---------------------------------------------------------------------------
// DataPoints
// ---------------------------------------------------------------------------
const DataPoints = ({ onSelect, onPointClick }) => {
  const [selectedPoint, setSelectedPoint] = React.useState(null);
  const [hoveredPoint,  setHoveredPoint]  = React.useState(null);
  const points = useMemo(() => getPoints(1.01), []);

  return (
    <group>
      {points.map((pt) => (
        <mesh
          key={pt.id}
          position={pt.position}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPoint(pt.id);
            onSelect(pt);
            onPointClick(pt.position);
          }}
          onPointerOver={() => { document.body.style.cursor = 'pointer'; setHoveredPoint(pt.id); }}
          onPointerOut={()  => { document.body.style.cursor = 'auto';    setHoveredPoint(null);  }}
        >
          <sphereGeometry args={[selectedPoint === pt.id ? 0.03 : 0.012, 24, 24]} />
          <meshBasicMaterial
            color={selectedPoint === pt.id ? "#ffffff" : pt.color}
            transparent opacity={0.9} toneMapped={false}
          />
          {hoveredPoint === pt.id && selectedPoint !== pt.id && (
            <Popup pt={pt} isSelected={false} />
          )}
          {selectedPoint === pt.id && (
            <Popup pt={pt} isSelected={true} />
          )}
        </mesh>
      ))}
    </group>
  );
};

// ---------------------------------------------------------------------------
// ZoomControls
// ---------------------------------------------------------------------------
const ZoomControls = ({ controlsRef }) => {
  const { camera } = useThree();

  const zoom = useCallback((direction) => {
    if (!controlsRef.current) return;
    const zoomStep = 0.4;
    const current  = camera.position.length();
    const next     = direction === 'in'
      ? Math.max(1.2, current - zoomStep)
      : Math.min(6,   current + zoomStep);
    camera.position.setLength(next);
    controlsRef.current.update();
  }, [camera, controlsRef]);

  return (
    <Html fullscreen>
      <div style={{
        position: 'absolute',
        top: '120px',
        left: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 40,
        pointerEvents: 'none'
      }}>
        {[
          { label: '+', dir: 'in',  title: 'Zoom in'  },
          { label: '−', dir: 'out', title: 'Zoom out' },
        ].map(({ label, dir, title }) => (
          <button
            key={dir}
            title={title}
            onClick={(e) => {
              e.stopPropagation();
              zoom(dir);
            }}
            style={{
              pointerEvents: 'auto',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(0,0,0,0.7)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontSize: '20px',
              lineHeight: 1,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.15s, border-color 0.15s',
              fontFamily: 'monospace',
              userSelect: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(168,85,247,0.4)';
              e.currentTarget.style.borderColor = '#a855f7';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.7)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </Html>
  );
};

// ---------------------------------------------------------------------------
// GlobeScene
// ---------------------------------------------------------------------------
const GlobeScene = ({ onPointClick, isRotating, selectedPointId }) => {
  const groupRef    = useRef(null);
  const controlsRef = useRef(null);
  const targetPoint = useRef(null);
  const isResetting = useRef(false);
  const lastUpdate  = useRef(0);

  const HOME_DISTANCE = 4;

  const [ripples, setRipples] = useState([]);
  const addRipple    = (position) => {
    const id = Math.random().toString(36).substring(7);
    setRipples(prev => [...prev, { id, position: position.clone() }]);
  };
  const removeRipple = (id) => setRipples(prev => prev.filter(r => r.id !== id));

  useEffect(() => {
    if (selectedPointId === null && targetPoint.current) {
      isResetting.current = true;
      targetPoint.current = null;
    }
  }, [selectedPointId]);

  const texture = useTexture(
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
  );

  useFrame((state) => {
    if (targetPoint.current && controlsRef.current) {
      state.camera.position.lerp(targetPoint.current.clone().normalize().multiplyScalar(1.6), 0.05);
      controlsRef.current.target.lerp(targetPoint.current, 0.05);
      isResetting.current = false;
    }
    if (isResetting.current && controlsRef.current) {
      const homePos    = new THREE.Vector3(0, 0, HOME_DISTANCE);
      const homeTarget = new THREE.Vector3(0, 0, 0);
      state.camera.position.lerp(homePos, 0.05);
      controlsRef.current.target.lerp(homeTarget, 0.05);
      if (state.camera.position.distanceTo(homePos) < 0.01) isResetting.current = false;
    }
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={2.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <group ref={groupRef}>
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            map={texture} metalness={0.1} roughness={0.7}
            emissive="#1e3a8a" emissiveIntensity={0.2} emissiveMap={texture}
          />
        </Sphere>
        <Sphere args={[1.02, 64, 64]}>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} side={THREE.BackSide} />
        </Sphere>
        <Sphere args={[1.005, 64, 64]}>
          <meshBasicMaterial color="#60a5fa" transparent opacity={0.05} />
        </Sphere>

        <Graticule />
        <ConnectionArcs />
        <RippleEffect ripples={ripples} onRemove={removeRipple} />
        <DataPoints
          onSelect={onPointClick}
          onPointClick={(pos) => { targetPoint.current = pos; addRipple(pos); }}
        />
      </group>

      <ZoomControls controlsRef={controlsRef} />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={false}
        minDistance={1.2}
        maxDistance={6}
        enableDamping={true}
        dampingFactor={0.05}
        rotateSpeed={0.5}
        autoRotate={isRotating && !targetPoint.current && !isResetting.current}
        autoRotateSpeed={1.2}
      />
    </>
  );
};

export default GlobeScene;