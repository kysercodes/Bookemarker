const featureContainer = document.getElementById("features");
const featureImage = document.getElementById("feature-img");
const featureHeading = document.getElementById("feature-heading");
const featureParagraph = document.getElementById("feature-paragraph");


// object with feature content when links are clicked
const features = {
  simple: {
    imageSrc: "/images/illustration-features-tab-1.svg",
    heading: "Bookmark in one click",
    paragraph: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
  },
  speedy: {
    imageSrc: "/images/illustration-features-tab-2.svg",
    heading: "Intelligent search",
    paragraph: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  easy: {
    imageSrc: "/images/illustration-features-tab-3.svg",
    heading: "Share your bookmarks",
    paragraph: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
};

featureContainer.addEventListener("click", changeFeature);

function changeFeature(e) {
  const featureId = e.target.parentElement.id;

  if (features.hasOwnProperty(featureId)) {
    const feature = features[featureId];
    featureImage.src = feature.imageSrc;
    featureHeading.innerText = feature.heading;
    featureParagraph.innerText = feature.paragraph;
  }
}


// clears feature content on click

function clearFeature() {
  featureHeading.innerHTML = "";
  featureParagraph.innerHTML = "";
  featureImage.src = "";
}
