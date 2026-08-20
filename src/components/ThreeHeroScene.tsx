import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface ThreeHeroSceneProps {
  onSequenceComplete?: () => void;
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = ({ onSequenceComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [loadStage, setLoadStage] = useState<'initial' | 'particles' | 'geometry' | 'complete'>('initial');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL support check
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        if (onSequenceComplete) onSequenceComplete();
        return;
      }
    } catch {
      setWebGLSupported(false);
      if (onSequenceComplete) onSequenceComplete();
      return;
    }

    // Performance detection (low power / mobile)
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.045);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 18;
    camera.position.y = 0;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Group for entire 3D ecosystem
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Procedural Particle Cloud (Depth Atmosphere)
    const particleCount = isMobile ? 220 : 650;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 35;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 2;
      particleScales[i] = Math.random() * 0.8 + 0.2;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(particleScales, 1));

    // Custom Particle Material with soft glow (Amethyst purple default)
    const particleMat = new THREE.PointsMaterial({
      color: 0xc77dff,
      size: 0.12,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particleSystem);

    // 2. Procedural Abstract Architectural Monolith Structure (PR Creative Tech Core)
    const monolithGroup = new THREE.Group();
    rootGroup.add(monolithGroup);

    // Outer crystalline wireframe lattice
    const icosaGeo = new THREE.IcosahedronGeometry(4.2, isMobile ? 1 : 2);
    const icosaWireMat = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaWireMat);
    monolithGroup.add(icosaMesh);

    // Inner refraction core (Dark obsidian facet geometry)
    const octaGeo = new THREE.OctahedronGeometry(2.4, 0);
    const octaMat = new THREE.MeshPhysicalMaterial({
      color: 0x080812,
      emissive: 0x050210,
      roughness: 0.15,
      metalness: 0.9,
      reflectivity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.85,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    monolithGroup.add(octaMesh);

    // Precision horizon ring
    const torusGeo = new THREE.TorusGeometry(3.6, 0.02, 16, 100);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xc77dff,
      transparent: true,
      opacity: 0.5,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 2.3;
    monolithGroup.add(torusMesh);

    // Dynamic Aura Theme Color Synchronizer
    const updateAuraColors = () => {
      const aura = document.documentElement.getAttribute('data-aura') || 'violet';
      if (aura === 'violet') {
        particleMat.color.setHex(0xc77dff);
        icosaWireMat.color.setHex(0x9d4edd);
        torusMat.color.setHex(0xc77dff);
        octaMat.color.setHex(0x080812);
        octaMat.emissive.setHex(0x1a0533);
      } else if (aura === 'noir' || aura === 'obsidian') {
        particleMat.color.setHex(0xffffff);
        icosaWireMat.color.setHex(0x94a3b8);
        torusMat.color.setHex(0xffffff);
        octaMat.color.setHex(0x040406);
        octaMat.emissive.setHex(0x111118);
      } else if (aura === 'cyan') {
        particleMat.color.setHex(0x00e5ff);
        icosaWireMat.color.setHex(0x3b82f6);
        torusMat.color.setHex(0x00e5ff);
        octaMat.color.setHex(0x050510);
        octaMat.emissive.setHex(0x001122);
      } else if (aura === 'emerald') {
        particleMat.color.setHex(0x00f5d4);
        icosaWireMat.color.setHex(0x10b981);
        torusMat.color.setHex(0x00f5d4);
        octaMat.color.setHex(0x040806);
        octaMat.emissive.setHex(0x001a10);
      } else if (aura === 'amber') {
        particleMat.color.setHex(0xffb703);
        icosaWireMat.color.setHex(0xfb8500);
        torusMat.color.setHex(0xffb703);
        octaMat.color.setHex(0x0c0804);
        octaMat.emissive.setHex(0x221100);
      }
    };
    updateAuraColors();

    const auraObserver = new MutationObserver(updateAuraColors);
    auraObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-aura'] });

    // Secondary subtle red orbital beacon (used sparingly as per brand rule)
    const beaconGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: 0xff3b30,
      transparent: true,
      opacity: 0.9,
    });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.position.set(3.7, 0.4, 0);
    monolithGroup.add(beaconMesh);

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00e5ff, 2.5, 30);
    cyanLight.position.set(6, 6, 8);
    scene.add(cyanLight);

    const deepBlueLight = new THREE.PointLight(0x1d4ed8, 2.0, 30);
    deepBlueLight.position.set(-8, -4, 4);
    scene.add(deepBlueLight);

    // Mouse & Touch Tracking with smooth interpolation
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scroll = { current: 0, target: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.targetY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    const handleScroll = () => {
      scroll.target = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Sequential Emergence Sequence (Black screen -> Particles -> Geometry -> Final Depth)
    let startTime = performance.now();
    let targetCameraZ = 12;

    if (prefersReducedMotion) {
      camera.position.z = targetCameraZ;
      setLoadStage('complete');
      if (onSequenceComplete) onSequenceComplete();
    } else {
      setTimeout(() => setLoadStage('particles'), 150);
      setTimeout(() => setLoadStage('geometry'), 600);
      setTimeout(() => {
        setLoadStage('complete');
        if (onSequenceComplete) onSequenceComplete();
      }, 1400);
    }

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Smooth scroll parallax
      scroll.current += (scroll.target - scroll.current) * 0.05;

      // Intro sequence camera zoom
      const seqProgress = Math.min((performance.now() - startTime) / 1800, 1);
      const easeProgress = 1 - Math.pow(1 - seqProgress, 3);
      if (!prefersReducedMotion) {
        camera.position.z = 18 - (18 - targetCameraZ) * easeProgress - scroll.current * 0.003;
      }

      // Restrained abstract rotation
      monolithGroup.rotation.y = elapsedTime * 0.12 + mouse.x * 0.45;
      monolithGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 + mouse.y * 0.35 + scroll.current * 0.0008;
      icosaMesh.rotation.z = elapsedTime * 0.05;
      octaMesh.rotation.y = -elapsedTime * 0.2;
      torusMesh.rotation.z = elapsedTime * 0.18;

      // Beacon orbit
      beaconMesh.position.x = Math.cos(elapsedTime * 0.8) * 3.6;
      beaconMesh.position.z = Math.sin(elapsedTime * 0.8) * 3.6;

      // Particle subtle drifting
      particleSystem.rotation.y = elapsedTime * 0.03 + mouse.x * 0.15;
      particleSystem.rotation.x = mouse.y * 0.1;

      // Camera parallax
      camera.position.x = mouse.x * 1.2;
      camera.position.y = mouse.y * 0.8 - scroll.current * 0.002;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      auraObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      icosaGeo.dispose();
      icosaWireMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
    };
  }, [onSequenceComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: loadStage === 'initial' ? 0.2 : 1,
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      aria-hidden="true"
    >
      {/* Graceful Fallback if WebGL unavailable */}
      {!webGLSupported && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.06) 0%, rgba(5, 5, 5, 0) 70%)',
          }}
        />
      )}
    </div>
  );
};
