import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Maximize2,
  Sparkles,
  X,
  Clock,
  Award,
  BookOpen
} from "lucide-react";
import {
  MILESTONES,
  SURVIVE_PHOTOS,
  THE_MOST_IMPORTANT_PHOTO,
} from "../data/perjalanan";

export default function Perjalanan() {
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Active hover/expanded milestone for mobile or desktop
  const [activeMilestoneId, setActiveMilestoneId] = useState<string | null>(null);

  // Intersection observer for final photo
  const [isFinalPhotoVisible, setIsFinalPhotoVisible] = useState(false);
  const finalPhotoRef = useRef<HTMLDivElement>(null);

  // Dynamic slowdown for WhatsApp Image 2026-09-11 at 05.47.20.webp in Row 3
  const row3ContainerRef = useRef<HTMLDivElement>(null);
  const row3TrackRef = useRef<HTMLDivElement>(null);
  const specialPhotoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isSpecialPassing, setIsSpecialPassing] = useState(false);
  const slowdownUntilRef = useRef<number>(0);
  const triggeredIndicesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    let animId: number;
    let currentRate = 1.0;

    const check = () => {
      const container = row3ContainerRef.current;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const inViewport = containerRect.bottom > -100 && containerRect.top < window.innerHeight + 100;

        if (inViewport) {
          const now = Date.now();

          // Check if any instance of the special photo is 100% visible inside the container
          specialPhotoRefs.current.forEach((el, idx) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();

            // 100% visible inside container (fully entered, not cut off)
            const isFullyVisible = rect.left >= containerRect.left && rect.right <= containerRect.right;

            // Trigger 2-second slowdown only when it first becomes 100% visible
            if (isFullyVisible && !triggeredIndicesRef.current.has(idx)) {
              slowdownUntilRef.current = now + 2000;
              triggeredIndicesRef.current.add(idx);
            }

            // Once it has completely exited to the left, reset trigger for subsequent loop
            if (rect.right < containerRect.left) {
              triggeredIndicesRef.current.delete(idx);
            }
          });

          // Active while within the 2-second slowdown window
          const isSlowingDown = now < slowdownUntilRef.current;
          setIsSpecialPassing(isSlowingDown);

          // During the 2s window, reduce speed to 0.15x. After 2s, quickly resume 1.0x!
          const targetRate = isSlowingDown ? 0.15 : 1.0;
          if (isSlowingDown) {
            currentRate += (targetRate - currentRate) * 0.25; // Quick deceleration
          } else {
            currentRate += (targetRate - currentRate) * 0.15; // Smooth acceleration back to normal
          }

          if (Math.abs(targetRate - currentRate) < 0.005) {
            currentRate = targetRate;
          }

          const anims = row3TrackRef.current?.getAnimations() || [];
          for (const anim of anims) {
            anim.playbackRate = currentRate;
          }
        }
      }

      animId = requestAnimationFrame(check);
    };

    animId = requestAnimationFrame(check);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFinalPhotoVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (finalPhotoRef.current) {
      observer.observe(finalPhotoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLightbox = (images: string[], index: number = 0) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, lightboxImages.length]);

  // Divide survive photos into 5 rows for marquee
  const row1Photos = SURVIVE_PHOTOS.slice(0, 14);
  const row2Photos = SURVIVE_PHOTOS.slice(14, 28);
  const row3Photos = SURVIVE_PHOTOS.slice(28, 42);
  const row4Photos = SURVIVE_PHOTOS.slice(42, 55);
  const row5Photos = SURVIVE_PHOTOS.slice(55);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-24">
      {/* Back Link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-black text-sm bg-white dark:bg-gray-800 text-black dark:text-white px-4 py-2 border-[2.5px] border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      {/* Header Banner */}
      <section className="bg-white dark:bg-gray-800 border-[3.5px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-6 sm:p-10 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-44 h-44 bg-brand-yellow/30 dark:bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -translate-x-8 translate-y-8 w-44 h-44 bg-brand-emerald/30 dark:bg-brand-emerald/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-yellow text-black font-black text-xs md:text-sm px-3.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
            <Sparkles size={16} />
            <span>Jejak halusinasi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-black dark:text-white leading-tight">
            Perjalanan Ceklipci
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            Menyusuri setiap fase, proses revisi, dan momen krusial sejak penentuan dosen pembimbing hingga lembar pengesahan ditandatangani. Dokumentasi visual perjalanan tugas akhir di Sistem Informasi UIN Jakarta.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-black">
            <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <Calendar size={14} className="text-brand-blue" />
              <span>Nov 2025 — Jul 2026</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <Award size={14} className="text-brand-emerald" />
              <span>8 Tahapan Milestone</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TIMELINE ROADMAP */}
      <section className="mb-20">

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[4px] bg-black dark:bg-white/40" />
          <div className="md:hidden absolute left-6 top-4 bottom-8 w-[4px] bg-black dark:bg-white/40" />

          <div className="space-y-8 md:space-y-12">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const hasPhotos = milestone.hasPhotos && milestone.photos && milestone.photos.length > 0;
              const isHovered = activeMilestoneId === milestone.id;

              return (
                <div
                  key={milestone.id}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                  onMouseEnter={() => hasPhotos && setActiveMilestoneId(milestone.id)}
                  onMouseLeave={() => setActiveMilestoneId(null)}
                >
                  {/* Timeline Pin Indicator */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-5 z-20">
                    <div
                      className={`w-7 h-7 rounded-full border-[3px] border-black flex items-center justify-center transition-transform duration-200 ${hasPhotos
                        ? "bg-brand-yellow scale-110 shadow-[0_0_0_4px_rgba(16,185,129,0.3)] animate-pulse"
                        : "bg-white dark:bg-gray-800"
                        }`}
                    >
                      {hasPhotos ? (
                        <Camera size={13} className="text-black" />
                      ) : (
                        <CheckCircle2 size={13} className="text-brand-emerald" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] w-[calc(100%-3.5rem)] ${isEven ? "md:pr-2" : "md:pl-2"
                      }`}
                  >
                    <div
                      className={`bg-white dark:bg-gray-800 border-[3px] border-black dark:border-white p-5 sm:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 relative ${isHovered ? "ring-2 ring-brand-emerald -translate-y-1" : ""
                        }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-black font-mono bg-black text-white dark:bg-white dark:text-black px-2.5 py-1">
                          <Clock size={12} />
                          {milestone.displayDate}
                        </span>

                        {milestone.tag && (
                          <span
                            className={`text-[11px] font-black px-2.5 py-0.5 border-2 border-black ${milestone.tagColor || "bg-gray-100 text-black"
                              }`}
                          >
                            {milestone.tag}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black font-serif text-black dark:text-white mt-1">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      {milestone.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                          {milestone.description}
                        </p>
                      )}

                      {/* Has Photos Indicator & Interactive Mini Gallery */}
                      {hasPhotos && milestone.photos && (
                        <div className="mt-4 pt-4 border-t-2 border-dashed border-black/20 dark:border-white/20">
                          <div className="flex items-center justify-between">
                            <button
                              type="button"
                              onClick={() => {
                                if (activeMilestoneId === milestone.id) {
                                  openLightbox(milestone.photos!, 0);
                                } else {
                                  setActiveMilestoneId(milestone.id);
                                }
                              }}
                              className="inline-flex items-center gap-2 text-xs font-black bg-brand-emerald text-black px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-emerald-400 cursor-pointer active:translate-x-[1px] active:translate-y-[1px] transition-all"
                            >
                              <Camera size={14} />
                              <span>Lihat Dokumentasi ({milestone.photos.length} Foto)</span>
                            </button>

                            <span className="text-[11px] text-gray-500 dark:text-gray-400 font-bold hidden sm:inline">
                              Hover / Klik untuk preview
                            </span>
                          </div>

                          {/* Mini Gallery Strip (Visible on hover or mobile tap) */}
                          <div
                            className={`mt-3 transition-all duration-300 overflow-hidden ${isHovered || activeMilestoneId === milestone.id
                              ? "max-h-64 opacity-100"
                              : "max-h-24 sm:max-h-28 opacity-90"
                              }`}
                          >
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
                              {milestone.photos.map((photo, pIdx) => (
                                <div
                                  key={pIdx}
                                  onClick={() => openLightbox(milestone.photos!, pIdx)}
                                  className="group/img relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded border-2 border-black dark:border-white overflow-hidden cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
                                  title="Klik untuk perbesar foto"
                                >
                                  <img
                                    src={photo}
                                    alt={`${milestone.title} dokumentasi ${pIdx + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                                    <Maximize2 size={16} className="text-white drop-shadow" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: THOSE WHO HELPED ME SURVIVE */}
      <section className="mb-24">
        <div className="bg-white dark:bg-gray-800 border-[3.5px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-6 sm:p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300 font-black text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-2">
                <Heart size={14} className="fill-current text-red-500" />
                <span>Special Gratitude</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-serif text-black dark:text-white">
                Those who help me Survive Ceklipci!!!
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs font-black text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-4 py-3 border-2 border-black dark:border-white self-start md:self-auto shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-colors">
              <span>{SURVIVE_PHOTOS.length} Foto Dokumentasi</span>
              <span className="hidden sm:inline">•</span>
              <span>Arahkan kursor untuk pause</span>
              {isSpecialPassing && (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 animate-pulse font-black">
                    <Sparkles size={12} />
                    <span>Mode Perlambat (2 Detik)</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* 5-Row Infinite Marquee Slider */}
        <div className="space-y-4 overflow-hidden py-2 pause-on-hover select-none">
          {/* Row 1: Leftward */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee gap-4 flex py-1">
              {row1Photos.concat(row1Photos).map((photo, idx) => (
                <div
                  key={`r1-${idx}`}
                  onClick={() => openLightbox(SURVIVE_PHOTOS, idx % row1Photos.length)}
                  className="relative group w-48 sm:w-60 h-36 sm:h-44 flex-shrink-0 bg-white dark:bg-gray-800 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform"
                >
                  <img
                    src={photo}
                    alt={`Dokumentasi survive ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 size={20} className="text-white drop-shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Reverse */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-reverse gap-4 flex py-1">
              {row2Photos.concat(row2Photos).map((photo, idx) => (
                <div
                  key={`r2-${idx}`}
                  onClick={() => openLightbox(SURVIVE_PHOTOS, 14 + (idx % row2Photos.length))}
                  className="relative group w-48 sm:w-60 h-36 sm:h-44 flex-shrink-0 bg-white dark:bg-gray-800 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform"
                >
                  <img
                    src={photo}
                    alt={`Dokumentasi survive ${idx + 15}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 size={20} className="text-white drop-shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Slow Leftward (Dynamic slowdown for WhatsApp Image 2026-09-11 at 05.47.20.webp) */}
          <div ref={row3ContainerRef} className="relative flex overflow-hidden">
            <div ref={row3TrackRef} className="animate-marquee-slow gap-4 flex py-1">
              {row3Photos.concat(row3Photos).map((photo, idx) => {
                const isTargetPhoto = photo.endsWith("/WhatsApp Image 2026-09-11 at 05.47.20.webp");
                return (
                  <div
                    key={`r3-${idx}`}
                    ref={isTargetPhoto ? (el) => { specialPhotoRefs.current[idx] = el; } : undefined}
                    onClick={() => openLightbox(SURVIVE_PHOTOS, 28 + (idx % row3Photos.length))}
                    className={`relative group w-48 sm:w-60 h-36 sm:h-44 flex-shrink-0 bg-white dark:bg-gray-800 overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300 ${isTargetPhoto
                      ? isSpecialPassing
                        ? "border-[3.5px] border-brand-yellow ring-4 ring-brand-yellow/60 shadow-[6px_6px_0px_0px_rgba(253,224,71,1)] scale-[1.03]"
                        : "border-[3px] border-brand-yellow shadow-[5px_5px_0px_0px_rgba(253,224,71,0.9)]"
                      : "border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                      }`}
                  >
                    <img
                      src={photo}
                      alt={`Dokumentasi survive ${idx + 29}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {isTargetPhoto && (
                      <div className="absolute top-2 left-2 z-10">
                        <span className="bg-brand-yellow text-black font-black text-[10px] px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                          Special ✨
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <Maximize2 size={20} className="text-white drop-shadow" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 4: Rightward Reverse Slow */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-reverse-slow gap-4 flex py-1">
              {row4Photos.concat(row4Photos).map((photo, idx) => (
                <div
                  key={`r4-${idx}`}
                  onClick={() => openLightbox(SURVIVE_PHOTOS, 42 + (idx % row4Photos.length))}
                  className="relative group w-48 sm:w-60 h-36 sm:h-44 flex-shrink-0 bg-white dark:bg-gray-800 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform"
                >
                  <img
                    src={photo}
                    alt={`Dokumentasi survive ${idx + 43}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 size={20} className="text-white drop-shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 5: Alt Leftward */}
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee-alt gap-4 flex py-1">
              {row5Photos.concat(row5Photos).map((photo, idx) => (
                <div
                  key={`r5-${idx}`}
                  onClick={() => openLightbox(SURVIVE_PHOTOS, 55 + (idx % row5Photos.length))}
                  className="relative group w-48 sm:w-60 h-36 sm:h-44 flex-shrink-0 bg-white dark:bg-gray-800 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform"
                >
                  <img
                    src={photo}
                    alt={`Dokumentasi survive ${idx + 56}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Maximize2 size={20} className="text-white drop-shadow" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MOST IMPORTANT PHOTO (FADE ON SCROLL, NO CAPTION) */}
      <section className="pt-8 pb-16">
        <div
          ref={finalPhotoRef}
          className={`max-w-2xl mx-auto transition-all duration-1000 ease-out transform ${isFinalPhotoVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-16 scale-95"
            }`}
        >
          <div
            onClick={() => openLightbox([THE_MOST_IMPORTANT_PHOTO], 0)}
            className="group relative bg-white dark:bg-gray-800 border-[4px] border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] p-3 sm:p-4 rounded-xl cursor-pointer hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={THE_MOST_IMPORTANT_PHOTO}
                alt="The most Important"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-xl">
              <span className="bg-black/80 text-white font-bold text-xs px-3 py-1.5 rounded flex items-center gap-1.5 backdrop-blur-sm">
                <Maximize2 size={14} />
                <span>Lihat Ukuran Penuh</span>
              </span>
            </div>
          </div>

          {/* Tombol Aksi: Kembali ke Beranda & Kiat-Kiat Skripsi */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-black text-base md:text-lg bg-white dark:bg-gray-800 text-black dark:text-white px-7 py-3.5 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl cursor-pointer"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Beranda</span>
            </Link>

            <Link
              to="/kiat-skripsi"
              className="inline-flex items-center gap-3 font-black text-base md:text-lg bg-brand-emerald text-black px-7 py-3.5 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl cursor-pointer"
            >
              <BookOpen size={20} />
              <span>Kiat & Tips Skripsi</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-red-500 hover:text-white transition-all rounded-lg cursor-pointer z-50"
            aria-label="Tutup"
          >
            <X size={24} />
          </button>

          {/* Navigation Prev */}
          {lightboxImages.length > 1 && (
            <button
              onClick={handlePrevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-emerald transition-all rounded-lg cursor-pointer z-50"
              aria-label="Foto Sebelumnya"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Current Image */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={lightboxImages[currentIndex]}
              alt={`Dokumentasi ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain border-2 border-white/20 shadow-2xl rounded"
            />
            {lightboxImages.length > 1 && (
              <div className="mt-4 bg-white/10 backdrop-blur-md text-white font-mono text-xs px-4 py-1.5 rounded-full border border-white/20">
                {currentIndex + 1} / {lightboxImages.length}
              </div>
            )}
          </div>

          {/* Navigation Next */}
          {lightboxImages.length > 1 && (
            <button
              onClick={handleNextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-brand-emerald transition-all rounded-lg cursor-pointer z-50"
              aria-label="Foto Selanjutnya"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
