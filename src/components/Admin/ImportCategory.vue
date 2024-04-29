<template>
  <div>
    Import data from XML
    <div>
      <input type="text">
    </div>
  </div>
</template>
<script>
import { saveDataToFirebase } from '@/services/FirebaseServices.js';

export default {
  data(){
    return{
      parsedData: null
    }
  },
  setup() {
    const handleXMLData = async (xmlData, categories) => {
       this.parsedData = await saveDataToFirebase(xmlData, categories);
      // Виконайте необхідні дії з parsedData
    };

    return {
      handleXMLData
    };
  }
};
</script>