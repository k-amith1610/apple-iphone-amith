import { Html } from '@react-three/drei'
import React from 'react'
import { ping } from 'ldrs'
ping.register()

const Loader = () => {
    return (
        <Html>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="w-[10vw] h-[10vw] rounded-full">
                    {/* // Default values shown */}
                    <l-ping
                        size="80"
                        speed="2"
                        color="gray"
                    ></l-ping>
                </div>
            </div>
        </Html>
    )
}

export default Loader
