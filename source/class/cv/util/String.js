/* String.js 
 * 
 * copyright (c) 2010-2017, Christian Mayer and the CometVisu contributers.
 * 
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 3 of the License, or (at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA
 */


qx.Class.define('cv.util.String', {
  type: "static",

  /*
  ******************************************************
    STATICS
  ******************************************************
  */
  statics: {
    __elem: null,

    /**
     * Decode HTML entities like &amp; to &
     * @param str {String} string to decode
     * @return {String}
     */
    decodeHtmlEntities: function (str) {
      if (!this.__elem) {
        this.__elem = qx.dom.Element.create("span");
      }
      this.__elem.innerHTML = str;
      return this.__elem.innerText;
    },
    
    /**
     * Insert in string values as the well known sprint() function of other
     * programming languages does.
     * When a malformation happens a generic string is returned and a warning
     * is shown on the console.
     * @return {String}
     */
    sprintf: function() {
      var args = qx.lang.Array.fromArguments(arguments);
      var string = '-';
      try {
        string = sprintf.apply(this, args);
      }
      catch ( err ) {
        console.warn( err, args );
      }
      return string;
    }
  }

});