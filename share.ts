namespace sharing {
    /**
     * Notifies the web application about the current program.
     */
    //% shim=TD_ID
    export function setCurrentProgram(program: string) {
        control.simmessages.send(
            "share",
            Buffer.fromUTF8(program || "")
        )
    }
}