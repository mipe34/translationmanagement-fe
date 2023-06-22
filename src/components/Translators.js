import React, { Component } from 'react';
import TranslatorsGrid from './TranslatorsGrid';

export default class Translators extends Component {
    render() {
        return([
                <h2>Translators</h2>,
                <TranslatorsGrid />       
        ]);
    };
  }