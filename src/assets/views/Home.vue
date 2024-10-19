<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
         <img alt="RealEstateCarelog" class="logo" src="../assets/Text.png">
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <v-container class="mt-3">
        <v-row>
          <v-col v-for="report in reports" :key="report.id" cols="12" md="4">
            <v-card>
              <v-card-title>{{ report.title }}</v-card-title>
              <v-card-subtitle>{{ report.date }}</v-card-subtitle>
              <v-card-actions>
                <ion-button @click="openReport(report)" expand="block">Open</ion-button>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </ion-content>
Welkom in onze Real Estate Care!
    <ion-footer>
      <ion-tab-bar>
        <ion-tab-button tab="home" @click="goTo('home')">
          <svg-icon type="mdi" :path="pathHome"></svg-icon>
          <ion-label>Dashboard</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="inspections" @click="goTo('inspections')">
          <svg-icon type="mdi" :path="pathInspection"></svg-icon>
          <ion-label>Inspections</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="reports" @click="goTo('reports')">
          <svg-icon type="mdi" :path="pathReport"></svg-icon>
          <ion-label>Reports</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="settings" @click="goTo('settings')">
          <svg-icon type="mdi" :path="pathSettings"></svg-icon>
          <ion-label>Settings</ion-label>
          
        </ion-tab-button>
      </ion-tab-bar>
    </ion-footer>
  </ion-page>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'; 
import { mdiPoliceBadgeOutline, mdiMagnify, mdiFileChart, mdiCog } from '@mdi/js'; // Import the icon paths
import '../assets/css/Home.css' // Import the external CSS file

export default {
  name: 'HomePage', 
  components: {
    SvgIcon 
  },
  data() {
    return {
      pathHome: mdiPoliceBadgeOutline, // Path for the home icon
      pathInspection: mdiMagnify, // Path for the inspection icon
      pathReport: mdiFileChart, // Path for the report icon
      pathSettings: mdiCog, // Path for the settings icon
      reports: [
        { id: 1, title: 'Report 1', date: '2024-10-01' },
        { id: 2, title: 'Report 2', date: '2024-10-02' },
        { id: 3, title: 'Report 3', date: '2024-10-03' },
      ],
    };
  },
  methods: {
    openReport(report) {
      this.$router.push({ path: `/report/${report.id}` });
    },
    goTo(tab) {
      this.$router.push({ name: tab });
    },
  },
};
</script>