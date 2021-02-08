// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

const InstrumentAudio = ({ instrumentName, notes }) => {
    const [instrumentPlayer, setInstrumentPlayer] = useState(null);
    useEffect(() => {
        setInstrumentPlayer(AudioPlayer());
    }, []);

    useEffect(() => {
        if (instrumentPlayer) {
            setInstrument();
            playNotes();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [instrumentPlayer]);

    useEffect(() => {
        if (notes && notes.length > 0) {
            playNotes();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notes]);

    const setInstrument = () => {
        instrumentPlayer.setInstrument(instrumentName);
    };

    const playNotes = () => {
        if (instrumentPlayer) {
            instrumentPlayer.playNote(notes[0]);
        }
    };

    return null;
};

export default InstrumentAudio;