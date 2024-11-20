import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import WH from '@site/src/components/WowheadLink';

export default {
  // Re-use the default mapping
  ...MDXComponents,

  WH,
};