export function createGallery(items) {
  return `
  <div class="wrapWrap">
      <li class="lFitem">
      <a class="lFlink" href="${items.webformatURL}">
        <img src="${items.largeImageURL}" alt="${items.tags}  " width="200" height="200" />
      </a>
    </li>

        <div class="wrapFoto">
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Likes</li>
            <p class="wrapQty">${items.likes}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Views</li>
            <p class="wrapQty">${items.views}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Comments</li>
            <p class="wrapQty">${items.comment}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Downloads</li>
            <p class="wrapQty">${items.downloads}</p>
        </ul> 
        </div>
    </div>
        </div>
  `;
}
