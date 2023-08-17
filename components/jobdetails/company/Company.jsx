import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageUrl } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageUrl(companyLogo)
              ? companyLogo
              : "https://cdn.townweb.com/cityofmineralpoint.com/wp-content/uploads/2021/01/Job-Openings-we-are-hiring.jpg"
          }}
          style={styles.logoImage}
          resizeMode='contain'
        />

      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
        </View>
        <Text style={styles.locationName}>{location}</Text>
      </View>

    </View>
  )
}

export default Company