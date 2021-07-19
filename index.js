/* create the constructor */

/* get the legnth of a vector which is the square root of the sum of the squares of the horizontal and vertical components mathematical function a² + b² = c²*/
class Vector {
    
    constructor(a,b) {
        this._a = a;
        this._b= b;
        }
    };
    
    
    length() {
        let a= this._a, b = this._b;
        return Math.sqrt(a * a + b * b);
      }
  }
  
  const vector = new Vector(2, 3)
  console.log(vector.length())
        
/* dot product to tell the similarity of two products mathematical function :a · b = |a| × |b| × cos(θ) */
       /* reduce method for javascript implementation */ 
        
class VectorDot {
    constructor(... coordinates) {
      this.coordinatess = coordinates
    }
    // ...
    
    dotProduct({ coordinates }) {
      return coordinates.reduce((acc, coordinate, index) => acc + coordinate * this.coordinates[index], 0)
    }
  }
  
  const one = new VectorDot(1, 4)
  const other = new VectorDot(2, 2)
  console.log(one.dotProduct(other))
 
  /* cross product operations are for 3D vectors and produce a vector that is perpendicular to both input vectors. */
  class VectorCross {
    constructor(...coords) {
      this.coords = coords
    }
    
    crossProduct({ coords }) {
      return new VectorCross(
        this.coords[1] * coords[2] - this.coords[2] * coords[1],
        this.coords[2] * coords[0] - this.coords[0] * coords[2],
        this.coords[0] * coords[1] - this.coords[1] * coords[0]
      )
    }
  }
  
  const one = new VectorCross(2, 1, 1)
  const other = new VectorCross(1, 2, 2)
  console.log(one.crossProduct(other))
  
  console.log(other.crossProduct(one))
