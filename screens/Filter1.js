import React from 'react'
import { Image, View } from 'react-native';

const Filter1 = ({face,src}) => {
  const leftEyePosition=face.LEFT_EYE
  const rightEyePosition=face.RIGHT_EYE
  const noseBasePosition=face.NOSE_BASE
  const width = face.bounds.size.width
const height = face.bounds.size.height
    const filterWidth = width * 3.5;
    const filterHeight = height * 0.7;

    const transformAngle = (
        angleRad = Math.atan(
          (rightEyePosition.y - leftEyePosition.y) /
            (rightEyePosition.x - leftEyePosition.x)
        )
      ) => (angleRad * 180) / Math.PI 
      // console.log(src);
    
      return (
        <View
          style={{
            position: "absolute",
            left: leftEyePosition.x - filterWidth * 0.46,
            right: rightEyePosition.x - filterWidth * 0.15,
            top: noseBasePosition.y - filterHeight * 1.5
          }}
        >
          <Image
            source={src}
            style={{
              width: filterWidth,
              height: filterHeight,
              resizeMode: "contain",
              transform: [{ rotate: `${transformAngle()}deg` }]
            }}
          />

        </View>
      );
}

export default Filter1;