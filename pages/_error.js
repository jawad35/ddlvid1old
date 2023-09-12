"use strict";

import { useEffect } from 'react';

export default function App() {

    useEffect(() => { 
        window.location = '/';
    }, []);
    
    return null;

}