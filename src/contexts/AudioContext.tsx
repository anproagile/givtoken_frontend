import React, { useState } from 'react'

const AudioContext = React.createContext({ audioVolume: null, updateAudioVolume: () => null })

const AudioContextProvider = ({ children }) => {
    const [audioVolume, setAudioVolume] = useState(0)

    const updateAudioVolume = () => {
        if (audioVolume === 0) {
            // set audio volume and auto play
        }
    }
    return <AudioContext.Provider value={{ audioVolume, updateAudioVolume }}>{children}</AudioContext.Provider>
}

export { AudioContext, AudioContextProvider }