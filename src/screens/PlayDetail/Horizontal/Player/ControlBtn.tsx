import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icon } from '@/components/common/Icon'
import { useTheme } from '@/store/theme/hook'
// import { useIsPlay } from '@/store/player/hook'
import { playNext, playPrev, togglePlay } from '@/core/player/player'
import { scaleSizeW } from '@/utils/pixelRatio'
import { useIsPlay } from '@/store/player/hook'

const WIDTH = scaleSizeW(48)

const PrevBtn = () => {
  const theme = useTheme()
  const handlePlayPrev = () => {
    void playPrev()
  }
  return (
    <TouchableOpacity style={{ ...styles.cotrolBtn, width: WIDTH, height: WIDTH }} activeOpacity={0.5} onPress={handlePlayPrev}>
      <Icon name='prevMusic' color={theme['c-button-font']} size={32} />
    </TouchableOpacity>
  )
}
const NextBtn = () => {
  const theme = useTheme()
  const handlePlayNext = () => {
    void playNext()
  }
  return (
    <TouchableOpacity style={{ ...styles.cotrolBtn, width: WIDTH, height: WIDTH }} activeOpacity={0.5} onPress={handlePlayNext}>
      <Icon name='nextMusic' color={theme['c-button-font']} size={32} />
    </TouchableOpacity>
  )
}

const TogglePlayBtn = () => {
  const theme = useTheme()
  const isPlay = useIsPlay()
  return (
    <TouchableOpacity style={{ ...styles.cotrolBtn, width: WIDTH, height: WIDTH }} activeOpacity={0.5} onPress={togglePlay}>
      <Icon name={isPlay ? 'pause' : 'play'} color={theme['c-button-font']} size={32} />
    </TouchableOpacity>
  )
}

export default () => {
  return (
    <View style={styles.content}>
      <PrevBtn />
      <TogglePlayBtn />
      <NextBtn />
    </View>
  )
}


const styles = StyleSheet.create({
  content: {
    flexGrow: 0,
    flexDirection: 'row',
  },
  cotrolBtn: {
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: '#ccc',
    shadowOpacity: 1,
    textShadowRadius: 1,
    marginLeft: 10,
  },
})
