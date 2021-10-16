import React, { useState } from 'react'
import { getApp } from '../../tcb'
import './index.css'

export default function Hello() {
  const app = getApp();

  return (
    <div className="hello"/>
  );
}
