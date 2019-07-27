import data from "./dummyData.json";
import Part from '../../models/Part';

export async function runDatabaseUpload() {  
  const dummyParts = data.database;
  dummyParts.forEach(function(part) {
    const newPart = new Part({
      partName: part.partName,
      webpage: part.webpage,
      priceLog: [...part.priceLog]
    });
    newPart.save();
  });
  console.log('Done!');
}