import React from 'react';
import ulog from 'ulog';

import { CONSTANTS } from 'joy-joy';
import Axes from './left-axes';

const log = ulog('joy-con-left');

const {
  BUTTON_MAPPINGS,
  COLORS: { BLUE }
} = CONSTANTS;

const DEFAULT_COLOR = '#44484C';
const ACTIVE_COLOR = '#FCFCFC';

/**
 * JoyCon Left SVG
 *
 * Based off https://commons.wikimedia.org/wiki/File:Nintendo_Switch_Joy-Con_illustration.svg
 * Generated from https://github.com/smooth-code/svgr
 */
const JoyConLeft = props => {
  const { index, buttons, axes } = props;
  log.info(
    `L#${index.toString()}`,
    buttons.map(({ value }) => value).join(' ')
  );

  const controllerColor = BLUE;

  const buttonColors = {};
  Object.keys(BUTTON_MAPPINGS).forEach(key => {
    const index = BUTTON_MAPPINGS[key];
    const button = buttons[index];
    const defaultColor = ['SL', 'SR'].includes(key)
      ? controllerColor
      : DEFAULT_COLOR;

    buttonColors[key] =
      !!button && button.pressed ? ACTIVE_COLOR : defaultColor;
  });

  return (
    <svg width={153} height={437} viewBox="0 0 153 437" fill="none" {...props}>
      <path
        d="M114 24.0904V4.96019C114 3.08634 112.774 1.00008 111.463 1.00008H73.9913C35.3111 1.00008 13.085 49.6946 7.1515 84.2562C6.88082 85.8329 6.78375 89.0001 8.54459 89.0001H12.9983L114 24.0904Z"
        fill={buttonColors.Z_TRIGGER}
        stroke="black"
      />
      <path
        d="M114.47 19.8438V15.6562C114.47 14.3994 113.186 13 111.814 13H85.5639C45.0703 13 8.82405 45.6619 2.6124 68.8441C2.32903 69.9017 2.22741 72.0261 4.0708 72.0261H8.73329L114.47 19.8438Z"
        fill={buttonColors.TRIGGER}
        stroke="black"
      />
      <path
        d="M150.335 41.2449H136.325V376.844H142.88V390.781C142.88 392.339 144.188 394.966 145.296 394.966H150.177C151.072 394.966 151.879 394.275 151.879 393.264V328.021C151.879 319.402 146.49 319.296 146.49 316.575V281.971C146.49 279.515 151.749 278.911 151.749 271.894V157.343C151.749 150.388 146.49 149.92 146.49 147.267L146.615 113.237C146.615 110.893 151.874 109.088 151.874 102.852L151.871 43.0458C151.88 42.0641 151.397 41.2449 150.335 41.2449H150.335Z"
        fill="#44484C"
        stroke="black"
      />
      <path
        d="M137.512 21.3826V434.07C137.512 435.094 137.006 435.867 135.715 435.867H86.0749C34.3954 435.867 1 390.169 1 350.792V102.851C1 44.9663 57.7644 18.1324 85.7189 18.1324H134.51C136.996 18.1324 137.512 19.5004 137.512 21.3826V21.3826Z"
        fill={controllerColor}
        stroke="black"
      />
      <path
        d="M149.804 316.693H145.606V282.178H149.716C151.151 282.178 151.881 283.179 151.881 284.343V314.881C151.881 315.986 151.073 316.693 149.804 316.693Z"
        fill={buttonColors.SR}
        stroke="black"
      />
      <path
        d="M149.804 112.928H145.606V147.443H149.716C151.151 147.443 151.881 146.442 151.881 145.278V114.74C151.881 113.635 151.073 112.928 149.804 112.928V112.928Z"
        fill={buttonColors.SL}
        stroke="black"
      />
      <path
        d="M126.451 56.4688H104.264V62.8438H126.451V56.4688Z"
        fill={buttonColors.MINUS}
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M105.764 311.344H86.7638C84.8998 311.344 83.3888 312.855 83.3888 314.719V333.094C83.3888 334.958 84.8998 336.469 86.7638 336.469H105.764C107.628 336.469 109.139 334.958 109.139 333.094V314.719C109.139 312.855 107.628 311.344 105.764 311.344Z"
        fill={buttonColors.CAPTURE}
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M105.014 324.125C105.014 326.47 104.082 328.72 102.424 330.378C100.765 332.037 98.5156 332.969 96.17 332.969C93.8245 332.969 91.5751 332.037 89.9166 330.378C88.258 328.72 87.3263 326.47 87.3263 324.125C87.3263 321.779 88.258 319.53 89.9166 317.871C91.5751 316.213 93.8245 315.281 96.17 315.281C98.5156 315.281 100.765 316.213 102.424 317.871C104.082 319.53 105.014 321.779 105.014 324.125V324.125Z"
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M104.519 259.507C100.501 259.507 96.6477 257.91 93.8065 255.069C90.9652 252.228 89.369 248.374 89.369 244.356C89.369 240.338 90.9652 236.485 93.8065 233.643C96.6477 230.802 100.501 229.206 104.519 229.206C108.538 229.206 112.391 230.802 115.232 233.643C118.074 236.485 119.67 240.338 119.67 244.356C119.67 248.374 118.074 252.228 115.232 255.069C112.391 257.91 108.538 259.507 104.519 259.507Z"
        fill={buttonColors.UP}
        stroke="black"
        strokeWidth={0.82506}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M100.483 250.725V238.049L111.461 244.387L100.483 250.725Z"
        fill="black"
        stroke="black"
        strokeWidth={0.904694}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.8899 259.507C37.8717 259.507 34.0182 257.91 31.1769 255.069C28.3357 252.228 26.7395 248.374 26.7395 244.356C26.7395 240.338 28.3357 236.485 31.1769 233.643C34.0182 230.802 37.8717 229.206 41.8899 229.206C45.908 229.206 49.7616 230.802 52.6028 233.643C55.4441 236.485 57.0403 240.338 57.0403 244.356C57.0403 248.374 55.4441 252.228 52.6028 255.069C49.7616 257.91 45.908 259.507 41.8899 259.507Z"
        fill={buttonColors.DOWN}
        stroke="black"
        strokeWidth={0.82506}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.0856 250.725V238.049L35.1078 244.387L46.0856 250.725Z"
        fill="black"
        stroke="black"
        strokeWidth={0.904694}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M88.355 275.671C88.355 279.689 86.7588 283.543 83.9175 286.384C81.0763 289.225 77.2227 290.821 73.2046 290.821C69.1865 290.821 65.3329 289.225 62.4916 286.384C59.6504 283.543 58.0542 279.689 58.0542 275.671C58.0542 271.653 59.6504 267.799 62.4916 264.958C65.3329 262.117 69.1865 260.521 73.2046 260.521C77.2227 260.521 81.0763 262.117 83.9175 264.958C86.7588 267.799 88.355 271.653 88.355 275.671Z"
        fill={buttonColors.RIGHT}
        stroke="black"
        strokeWidth={0.82506}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.5234 271.758H66.8474L73.1854 282.736L79.5234 271.758Z"
        fill="black"
        stroke="black"
        strokeWidth={0.904694}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M88.355 213.042C88.355 217.06 86.7588 220.913 83.9175 223.755C81.0763 226.596 77.2227 228.192 73.2046 228.192C69.1865 228.192 65.3329 226.596 62.4916 223.755C59.6504 220.913 58.0542 217.06 58.0542 213.042C58.0542 209.023 59.6504 205.17 62.4916 202.329C65.3329 199.487 69.1865 197.891 73.2046 197.891C77.2227 197.891 81.0763 199.487 83.9175 202.329C86.7588 205.17 88.355 209.023 88.355 213.042Z"
        fill={buttonColors.LEFT}
        stroke="black"
        strokeWidth={0.82506}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M79.5234 217.361H66.8474L73.1854 206.383L79.5234 217.361Z"
        fill="black"
        stroke="black"
        strokeWidth={0.904694}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M105.389 126.469C105.389 134.972 102.011 143.127 95.9979 149.14C89.985 155.153 81.8298 158.531 73.3263 158.531C64.8228 158.531 56.6676 155.153 50.6547 149.14C44.6418 143.127 41.2638 134.972 41.2638 126.469C41.2638 117.965 44.6418 109.81 50.6547 103.797C56.6676 97.7842 64.8228 94.4062 73.3263 94.4062C81.8298 94.4062 89.985 97.7842 95.9979 103.797C102.011 109.81 105.389 117.965 105.389 126.469V126.469Z"
        fill="#44484C"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M95.8104 126.691C95.8104 132.654 93.4416 138.373 89.225 142.59C85.0084 146.806 79.2894 149.175 73.3263 149.175C67.3631 149.175 61.6442 146.806 57.4276 142.59C53.211 138.373 50.8421 132.654 50.8421 126.691C50.8421 120.728 53.211 115.009 57.4276 110.792C61.6442 106.576 67.3631 104.207 73.3263 104.207C79.2894 104.207 85.0084 106.576 89.225 110.792C93.4416 115.009 95.8104 120.728 95.8104 126.691V126.691Z"
        fill={buttonColors.LEFT_STICK}
        stroke="black"
        strokeWidth={1.426}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M72.1645 100.355C72.1647 98.21 72.1705 96.9426 72.1803 96.8745C72.2102 96.6678 72.3118 96.4702 72.4695 96.3126C72.9447 95.8374 73.7528 95.9783 74.0459 96.5876C74.1557 96.816 74.1481 96.5391 74.1483 100.305L74.1486 103.707L73.4471 103.707C73.0613 103.706 72.6149 103.711 72.4549 103.717L72.1642 103.728L72.1645 100.355V100.355Z"
        fill="black"
        stroke="black"
        strokeWidth={0.03125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M73.0449 156.776C72.6554 156.732 72.3202 156.443 72.1976 156.044C72.1732 155.965 72.1708 155.714 72.1665 152.805L72.1615 149.651L72.3923 149.664C72.5192 149.671 72.966 149.677 73.385 149.677H74.147L74.143 152.833L74.139 155.989L74.1043 156.091C73.9998 156.396 73.7586 156.636 73.4529 156.738C73.3531 156.772 73.1636 156.789 73.0448 156.776L73.0449 156.776Z"
        fill="black"
        stroke="black"
        strokeWidth={0.03125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M96.311 126.759C96.311 126.404 96.305 125.958 96.2983 125.766L96.2856 125.419L99.5171 125.422L102.748 125.427L102.863 125.468C103.294 125.626 103.562 126.023 103.533 126.462C103.517 126.706 103.421 126.92 103.252 127.093C103.119 127.229 102.995 127.301 102.764 127.375C102.714 127.391 102.053 127.396 99.5063 127.399L96.311 127.404V126.759L96.311 126.759Z"
        fill="black"
        stroke="black"
        strokeWidth={0.03125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.6391 127.387C43.4241 127.359 43.2141 127.25 43.0609 127.088C42.5282 126.525 42.7969 125.626 43.5532 125.441C43.6237 125.424 44.2423 125.42 47.003 125.419L50.3669 125.419L50.3546 125.751C50.3476 125.934 50.3423 126.38 50.3423 126.743V127.403L47.0376 127.401C45.22 127.4 43.6907 127.393 43.6391 127.387H43.6391Z"
        fill="black"
        stroke="black"
        strokeWidth={0.03125}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Axes index={index} axes={axes} />
    </svg>
  );
};

export default JoyConLeft;