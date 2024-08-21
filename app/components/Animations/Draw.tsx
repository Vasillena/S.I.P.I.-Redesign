"use client";

import { motion } from "framer-motion";
import { useBreakpoints } from "../../utils/useBreakpoints";
import { useRef } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    // const delay = 1 + i * 0.5;
    const delay = 0;

    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 6,
          bounce: 0,
        },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Draw() {
  const { mobile } = useBreakpoints();
  const ref = useRef(null);

  const strokeWidth = mobile ? 4 : 3;

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: mobile ? "40vh" : "60vh",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
      }}
    >
      <motion.svg
        width="80%"
        height="80%"
        viewBox="0 0 3046.2 1185.59"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M882.37,899.37c5.91-24.83,11.62-50.48,18.13-75.93,26.58-103.83,52.28-207.9,80.49-311.28,25-91.65,52.54-182.62,79.64-273.68,15.95-53.59,32.99-106.86,50.01-160.13,5.07-15.88,12.11-31.08,23.02-44.03,10.65-12.65,23.76-19.83,40.84-16.74,10.4,1.88,17.11,8.43,20.91,18.1,3.85,9.79,5.24,20.07,4.21,30.41-1.87,18.88-4.43,37.69-6.64,56.54-.37,3.13-.58,6.31-.58,9.46-.09,104.99.11,209.98-.29,314.97-.27,71.46-1.05,142.93-2.23,214.39-1.16,69.95-2.83,139.9-4.81,209.84-1.54,54.44-3.84,108.86-5.93,163.29-.95,24.69-3.07,49.24-11.99,72.6-2.24,5.87-5.33,11.46-8.45,16.94-.85,1.49-3.16,2.86-4.91,3.01-17.18,1.46-29.33-5.65-37.09-21.25-11.54-23.19-15.05-47.88-13.99-73.28,1.59-38.11,4.6-76.16,5.79-114.27,2.47-79.08,4.41-158.19,6.07-237.29,1.39-66.28,2.25-132.57,3.02-198.86.61-52.97.72-105.95,1.05-158.92.02-3.39,0-6.78-.92-10.31-3.67,12.16-7.48,24.29-10.97,36.5-20.64,72.32-42.09,144.43-61.58,217.07-24.15,90-47.65,180.2-69.59,270.76-23.9,98.66-45.71,197.83-68.41,296.79-3.81,16.63-11.55,22.93-29.75,23.33-11.45.25-22.61-1.53-32.64-7.58-7.3-4.4-11.37-10.94-12.39-19.48-7.42-62.18-14.94-124.34-22.32-186.52-6.28-52.91-12.76-105.8-18.52-158.76-5.89-54.14-11.4-108.33-16.37-162.56-5-54.56-9.61-109.18-13.52-163.83-3.71-51.83-6.58-103.73-9.29-155.63-2.69-51.4-4.43-102.85-7.21-154.24-.92-17.08-4.13-34.03-5.66-51.1-1.77-19.77-2.88-39.62,2.19-59.14,3.96-15.26,10.97-28.76,26.89-34.22,7.36-2.52,15.66-3.36,23.48-3.16,9.3.23,15.88,6.09,20.31,14.25,5.51,10.16,8.45,21.11,8.69,32.52.46,21.63.62,43.29.24,64.92-1.11,61.83.38,123.6,3.76,185.33,2.58,47.24,5.14,94.48,8.64,141.65,3.87,52.15,8.56,104.24,13.37,156.32,4.47,48.43,9.46,96.81,14.42,145.18,3.78,36.94,7.48,73.89,12.01,110.75,1.98,16.1,5.93,31.97,8.87,47.29Z"
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M2503.79,901.44c4.48-18.76,8.58-36.73,13.07-54.6,20.03-79.73,39.66-159.57,60.43-239.12,17.07-65.36,34.55-130.65,53.64-195.44,27.09-91.93,55.79-183.38,83.87-275.02,6.77-22.11,13.4-44.27,20.86-66.15,4.57-13.4,10.98-26.12,20.22-37.09,10.2-12.11,22.56-19.58,39.16-17.42,11.83,1.54,19.23,8.49,23.25,19.32,5.01,13.51,4.56,27.45,2.78,41.45-1.81,14.21-3.67,28.41-5.36,42.62-.49,4.12-.68,8.31-.69,12.46-.04,78.5.21,157-.09,235.49-.31,82.73-.8,165.47-1.85,248.19-.89,69.95-2.3,139.9-4.21,209.84-1.74,63.44-4.67,126.85-6.68,190.28-.71,22.51-1.51,44.95-5.81,67.11-2.71,13.99-7.25,27.31-14.64,39.61-1.53,2.55-3.15,3.64-6.25,3.81-18.16,1-29.86-7.63-37.36-23.64-11.12-23.74-13.85-48.79-12.72-74.56,2.75-62.4,6.15-124.78,8.04-187.2,2.33-77.25,3.66-154.54,4.93-231.81,1.11-67.79,1.57-135.59,2.26-203.39.3-29.65.47-59.3.69-88.95.01-1.82,0-3.65-.83-5.68-2,6.53-4.12,13.02-5.97,19.58-27.13,95.91-55.33,191.53-81,287.83-25.93,97.3-50.02,195.1-73.64,292.99-17.92,74.25-33.84,148.98-50.65,223.5-2.76,12.23-9.66,18.78-21.96,20.7-11.64,1.82-22.94.14-33.85-3.95-11.11-4.16-17.41-12.12-18.81-24.16-4.32-37.22-8.84-74.41-13.33-111.6-5.2-43.14-10.65-86.24-15.63-129.41-5.4-46.82-10.6-93.66-15.48-140.54-5.44-52.34-10.78-104.7-15.5-157.1-4.02-44.62-7.6-89.29-10.45-134-4.61-72.31-8.59-144.65-12.57-217-1.8-32.76-2.55-65.59-4.61-98.33-1.3-20.74-4.52-41.35-6.15-62.08-1.26-16.02.15-31.96,5.52-47.31,6.98-19.99,22.54-30.85,43.72-30.7,11.43.09,19.66,5.23,25.04,15.23,7.43,13.81,9.05,28.86,8.95,44.1-.24,34.98-1.8,69.98-1.17,104.94.92,51.45,2.87,102.9,5.17,154.31,1.78,39.76,4.41,79.5,7.36,119.2,3.4,45.84,7.29,91.65,11.48,137.42,4.51,49.25,9.52,98.46,14.5,147.67,3.69,36.45,7.39,72.9,11.66,109.28,1.82,15.49,5.22,30.79,7.7,46.21,1.18,7.35,1.9,14.77,2.95,23.07Z"
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
          variants={draw}
          custom={7}
        />
        <motion.path
          d="M1939.81,84.06c-105.48-5.96-210.48-4.88-316.81-1.87,0,11.2.22,21.98-.04,32.74-1.72,73.1-3.76,146.19-5.26,219.3-1.11,53.62-1.98,107.25-2.21,160.87-.3,69.63-.51,139.27.45,208.88.8,57.62,2.86,115.23,5.27,172.8,2.04,48.75,4.99,97.48,8.31,146.17,2.49,36.55,5.91,73.04,9.61,109.49.98,9.62-1.42,16.58-9.12,21.98-4.36,3.06-8.56,6.38-13.11,9.11-12.24,7.36-24.63,14.48-37.58,22.06-1.03-11.07-2.27-21.9-3.02-32.76-4.64-66.96-9.87-133.9-13.52-200.92-2.96-54.38-4.42-108.85-5.75-163.29-1.25-51.45-2.05-102.94-1.98-154.4.1-72.46.91-144.91,1.94-217.36.81-57.12,2.29-114.23,3.7-171.33,1.38-55.95,3.27-111.89,4.38-167.85.2-9.99,3.78-17,11.65-22.19,4.14-2.73,5.72-5.4,4.73-10.86-2.18-11.94,3.76-19.33,16.6-20.45,14.57-1.27,29.24-1.83,43.87-1.95,57.46-.46,114.95-1.52,172.39-.62,45.77.72,91.5,3.96,137.25,6.12,4.16.2,8.29.84,12.45.98,20.1.67,33.36,12.02,43.07,28.22,2.43,4.05,3.75,9.51,3.58,14.24-2.35,65.25-5.25,130.48-7.61,195.73-1.96,54.26-3.98,108.53-4.94,162.82-2,112.09-4.11,224.19-4.62,336.29-.33,73.44,1.64,146.9,3.4,220.33,1.01,42.12,3.58,84.2,5.6,126.29.58,12.14,1.46,24.28,2.55,36.39,1.8,20.12-7.98,29.03-27.92,25.28-13.67-2.57-24.76-9.44-33.81-19.79-4.32-4.94-6.39-10.8-6.73-17.36-2.87-55.23-6.23-110.43-8.51-165.68-1.75-42.43-2.72-84.91-3.03-127.38-.57-78.78-.95-157.56-.37-236.34.49-67.12,1.96-134.24,3.82-201.34,2.27-81.92,5.36-163.81,8.21-245.72.84-24.3,2.07-48.59,3.11-72.89.04-.99,0-1.98,0-3.76Z"
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
          variants={draw}
          custom={5}
        />
        <motion.path
          d="M.09,613.95c-.57-51.19,1.62-102.26,7.35-153.13,7.74-68.72,21.55-136.09,45.84-201.04,17.11-45.77,38.76-89.13,68.6-128.09C173.24,64.66,240.24,23.13,323.43,7.91c11.58-2.12,22.95-5.73,35-4.03,17.45,2.46,29.1,12.39,36.03,28.11,3.63,8.23,1.48,15.85-6.99,19.86-8.74,4.14-18.27,7.13-27.78,8.98-15.98,3.1-32.52,3.65-48.27,7.5-34.19,8.36-61.83,28.18-85.95,53.17-26.49,27.44-46.77,59.25-64.45,92.84-36.61,69.58-57.93,143.97-69.78,221.35-11.66,76.17-14.51,152.82-11.87,229.71,1.99,58,7.41,115.71,18.27,172.75,10.81,56.78,26.64,112.05,53.82,163.48,18.26,34.54,41.29,65.28,72.89,88.91,30.4,22.73,64.7,35.18,102.42,38.54,21.36,1.9,42.53.53,63.78-2.18,9.04-1.15,18.67-.34,27.66,1.44,9.88,1.96,16.8,8.63,18.99,19.04,2.06,9.83-1.43,17.62-10.95,20.82-8.26,2.77-17.09,4.39-25.78,5.2-47.24,4.4-93.83,1.34-139.25-13.43-54.49-17.72-98.83-50.05-135.1-93.96-35.02-42.4-59.23-90.75-77.77-142.14-19.69-54.57-31.83-110.92-39.19-168.4C3.13,708.49.42,661.3.09,613.95Z"
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M546.59,1149.91c-26.23.07-43.57-20.66-38.42-46.46,4.18-20.94,12.99-39.26,32.49-50.33,12.88-7.31,26.94-10.82,41.72-9.65,22.2,1.76,36.67,16.12,43.12,39.53,5.16,18.73-1.47,32.37-15.54,43.75-18.46,14.93-39.4,23.21-63.37,23.16Z"
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M1369.91,1149.96c-31.5.11-49.06-21.74-42.97-48.13,3.57-15.49,9.21-30.12,21.55-40.8,17.84-15.44,38.74-21.06,61.81-15.8,13.78,3.14,23.47,12.21,29.03,25.24,2.15,5.02,3.43,10.4,5.21,15.59,5.01,14.65-1.28,26.6-10.86,36.19-11.1,11.11-24.9,19.1-40.1,23.54-9.01,2.63-18.6,3.32-23.67,4.17Z"
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
          variants={draw}
          custom={4}
        />
        <motion.path
          d="M2168.67,1149.88c-26.46.12-43.92-20.78-38.61-46.72,4.02-19.61,12-37.19,29.74-48.32,14.83-9.31,31.19-13.46,48.65-10.77,21.89,3.37,32.5,18.27,38.75,38.18,5.93,18.88-2.16,34.29-15.53,44.73-18.51,14.45-39.14,23.1-63,22.9Z"
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
          variants={draw}
          custom={6}
        />
      </motion.svg>
    </div>
  );
}
