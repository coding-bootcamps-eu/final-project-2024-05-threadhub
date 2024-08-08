<template>
  <div>
    <ProfileViewHeader />
    <ProfileViewStatus />
  </div>
</template>

<script>
import ProfileViewHeader from '@/components/ProfileViewHeader.vue';
import ProfileViewStatus from '@/components/ProfileViewStatus.vue';

export default {
  name: 'ProfileView',

  components: {
    ProfileViewHeader,
    ProfileViewStatus,
  },
};
</script>
