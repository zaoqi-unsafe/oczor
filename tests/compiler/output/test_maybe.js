var oc = {};
oc.instances = {};

oc.cloneObject = function(obj){
	var result = {};
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) result[key] = obj[key];
	}
	return result;
}

if(oc.std == null){
  oc.std = {};
}
oc.std.ff = (function(){
  function print(x){ console.log(x); }

function addAny(x,y){ return x + y; }

function mulAny(x,y){ return x * y; }

function subAny(x,y){ return x - y; }

function eqAny(x,y){ return x === y; }

function showAny(x){ return x + ""; }

var unit = {}
var emptyObject = {}

var eqInt = eqAny;
var eqDouble = eqAny;
var eqString = eqAny;
var eqChar = eqAny;
var eqBool = eqAny;

var showInt = showAny;
var showDouble = showAny;
var showString = showAny;
var showChar = showAny;
var showBool = showAny;

var addInt = addAny
var mulInt = mulAny
var subInt = subAny
var divInt = function(x,y){return x / y | 0;}

var addDouble = addAny
var mulDouble = mulAny
var subDouble = subAny
var divDouble = function(x,y){return x / y;}

var addBool = function(x,y){return x || y}
var mulBool = function(x,y){return x && y}

var not = function(x){return !x}
var orBool = function(x,y){return x || y}
var andBool = function(x,y){return x && y}

var appendString = addAny


  return {
    unit : unit,
    showInt : showInt,
    showDouble : showDouble,
    showString : showString,
    showChar : showChar,
    showBool : showBool,
    eqAny : eqAny,
    eqInt : eqInt,
    eqDouble : eqDouble,
    eqString : eqString,
    eqChar : eqChar,
    eqBool : eqBool,
    not : not,
    andBool : andBool,
    orBool : orBool,
    addInt : addInt,
    mulInt : mulInt,
    subInt : subInt,
    divInt : divInt,
    addDouble : addDouble,
    mulDouble : mulDouble,
    subDouble : subDouble,
    divDouble : divDouble,
    appendString : appendString,
    print : print
  }
})();
if(oc.std == null){
  oc.std = {};
}
oc.std.numbers = (function(){
  oc.instances.add = {};
  var add = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.zero = {};
  var zero = function(x){
    return x;
  };
  oc.instances.mul = {};
  var mul = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.one = {};
  var one = function(x){
    return x;
  };
  oc.instances.sub = {};
  var sub = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.div = {};
  var div = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.add.Int = oc.std.ff.addInt;
  oc.instances.mul.Int = oc.std.ff.mulInt;
  oc.instances.zero.Int = 0;
  oc.instances.one.Int = 1;
  oc.instances.sub.Int = oc.std.ff.subInt;
  oc.instances.div.Int = oc.std.ff.divInt;
  oc.instances.add.Double = oc.std.ff.addDouble;
  oc.instances.mul.Double = oc.std.ff.mulDouble;
  oc.instances.zero.Double = 0.0;
  oc.instances.one.Double = 1.0;
  oc.instances.sub.Double = oc.std.ff.subDouble;
  oc.instances.div.Double = oc.std.ff.divDouble;
  var negate = function(_nzero,_nsub,x){
    return _nsub(zero(_nzero),x);
  };
  return {
    add : add,
    zero : zero,
    mul : mul,
    one : one,
    sub : sub,
    div : div,
    negate : negate
  }
})();
if(oc.std == null){
  oc.std = {};
}
oc.std.prelude = (function(){
  var flip = function(f){
    return function(a,b){
      return f(b,a);
    };
  };
  var cnst = function(x){
    return function(y){
      return x;
    };
  };
  var id = function(x){
    return x;
  };
  var fst = function(x,y){
    return x;
  };
  var snd = function(x,y){
    return y;
  };
  oc.instances.show = {};
  var show = function(x,p1){
    return x(p1);
  };
  oc.instances.eq = {};
  var eq = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.mempty = {};
  var mempty = function(x){
    return x;
  };
  oc.instances.append = {};
  var append = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.map = {};
  var map = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.apply = {};
  var apply = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.pure = {};
  var pure = function(x,p1){
    return x(p1);
  };
  oc.instances.bind = {};
  var bind = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.traverse = {};
  var traverse = function(x,p1,p2){
    return x(p1,p2);
  };
  oc.instances.show.Int = oc.std.ff.showInt;
  oc.instances.show.Double = oc.std.ff.showDouble;
  oc.instances.show.String = oc.std.ff.showString;
  oc.instances.show.Char = oc.std.ff.showChar;
  oc.instances.show.Bool = oc.std.ff.showBool;
  oc.instances.eq.Int = oc.std.ff.eqInt;
  oc.instances.eq.Double = oc.std.ff.eqDouble;
  oc.instances.eq.String = oc.std.ff.eqString;
  oc.instances.eq.Char = oc.std.ff.eqChar;
  oc.instances.eq.Bool = oc.std.ff.eqBool;
  oc.instances.mempty.String = "";
  oc.instances.append.String = oc.std.ff.appendString;
  return {
    flip : flip,
    cnst : cnst,
    id : id,
    fst : fst,
    snd : snd,
    show : show,
    eq : eq,
    mempty : mempty,
    append : append,
    map : map,
    apply : apply,
    pure : pure,
    bind : bind,
    traverse : traverse
  }
})();
oc.testing = (function(){
  var check = function(b){
    return oc.std.ff.print((b ? "Pass" : "FAIL!!!"));
  };
  var checkEq = function(_neq,x,y){
    return check(_neq(x,y));
  };
  return {
    check : check,
    checkEq : checkEq
  }
})();
if(oc.std == null){
  oc.std = {};
}
oc.std.foldable = (function(){
  oc.instances.foldl = {};
  var foldl = function(x,p1,p2,p3){
    return x(p1,p2,p3);
  };
  var any = function(_qfoldl,f,l){
    return _qfoldl(function(a,e){
      return (a || f(e));
    },false,l);
  };
  var all = function(_aefoldl,f,l){
    return _aefoldl(function(a,e){
      return (a && f(e));
    },true,l);
  };
  var or = function(_amfoldl,l){
    return any(_amfoldl,oc.std.prelude.id,l);
  };
  var and = function(_aufoldl,l){
    return all(_aufoldl,oc.std.prelude.id,l);
  };
  var sum = function(_azfoldl,_bmzero,_bmadd,l){
    return _azfoldl(_bmadd,oc.std.numbers.zero(_bmzero),l);
  };
  var product = function(_brfoldl,_ceone,_cemul,l){
    return _brfoldl(_cemul,oc.std.numbers.one(_ceone),l);
  };
  var contains = function(_cteq,_cufoldl,x,l){
    return any(_cufoldl,function(y){
      return _cteq(x,y);
    },l);
  };
  var count = function(_czfoldl,l){
    return _czfoldl(function(a,e){
      return (a + 1);
    },0,l);
  };
  var foldMap = function(_dymempty,_dyappend,_dlfoldl,f,l){
    return _dlfoldl(function(a,e){
      return _dyappend(a,f(e));
    },oc.std.prelude.mempty(_dymempty),l);
  };
  var concat = function(_ecfoldl,_ehmempty,_ehappend,l){
    return foldMap(_ehmempty,_ehappend,_ecfoldl,oc.std.prelude.id,l);
  };
  return {
    foldl : foldl,
    any : any,
    all : all,
    or : or,
    and : and,
    sum : sum,
    product : product,
    contains : contains,
    count : count,
    foldMap : foldMap,
    concat : concat
  }
})();
if(oc.std == null){
  oc.std = {};
}
oc.std.maybes = (function(){
  var none = {};
  oc.instances.eq.None = oc.std.ff.eqAny;
  var noneMaybe = none;
  var pureMaybe = function(x){
    return {
      just : x
    };
  };
  var maybe = function(_a1,_a2,_a3){
    if((function(x,f,_a){
      return oc.instances.eq.None(_a,none);
    })(_a1,_a2,_a3)){
      return (function(x,f,_a){
        return x;
      })(_a1,_a2,_a3);
    }else{
      if((function(x,f,z){
        return z.just !== undefined;
      })(_a1,_a2,_a3)){
        return (function(x,f,z){
          return f(z.just);
        })(_a1,_a2,_a3);
      }else{
        throw "cases error";
      }
    }
  };
  var isNone = function(x){
    return maybe(true,oc.std.prelude.cnst(false),x);
  };
  var isJust = function(x){
    return maybe(false,oc.std.prelude.cnst(true),x);
  };
  var fromMaybe = function(x,m){
    return maybe(x,oc.std.prelude.id,m);
  };
  var mapMaybe = function(f,x){
    return maybe(noneMaybe,function(y){
      return {
        just : f(y)
      };
    },x);
  };
  var bindMaybe = function(f,x){
    return maybe(none,f,x);
  };
  var applyMaybe = function(f,x){
    return maybe(none,function(y){
      return mapMaybe(y,x);
    },f);
  };
  var showMaybe = function(_cvshow,x){
    return maybe("none",function(p1){
      return oc.std.prelude.show(_cvshow,p1);
    },x);
  };
  var eqMaybe = function(_edeq,_a1,_a2){
    if((function(_b,_c){
      return (oc.instances.eq.None(_b,none) && oc.instances.eq.None(_c,none));
    })(_a1,_a2)){
      return (function(_b,_c){
        return true;
      })(_a1,_a2);
    }else{
      if((function(_d,y){
        return oc.instances.eq.None(_d,none);
      })(_a1,_a2)){
        return (function(_d,y){
          return false;
        })(_a1,_a2);
      }else{
        if((function(x,_e){
          return oc.instances.eq.None(_e,none);
        })(_a1,_a2)){
          return (function(x,_e){
            return false;
          })(_a1,_a2);
        }else{
          if((function(x,y){
            return (x.just
            !==
            undefined && y.just
            !==
            undefined);
          })(_a1,_a2)){
            return (function(x,y){
              return _edeq(x.just,y.just);
            })(_a1,_a2);
          }else{
            throw "cases error";
          }
        }
      }
    }
  };
  var foldlMaybe = function(f,i,x){
    return maybe(i,function(y){
      return f(i,y);
    },x);
  };
  oc.instances.show.Maybe = showMaybe;
  oc.instances.eq.Maybe = eqMaybe;
  oc.instances.foldl.Maybe = foldlMaybe;
  oc.instances.pure.Maybe = pureMaybe;
  oc.instances.map.Maybe = mapMaybe;
  oc.instances.apply.Maybe = applyMaybe;
  oc.instances.bind.Maybe = bindMaybe;
  oc.instances.mempty.Maybe = none;
  return {
    none : none,
    noneMaybe : noneMaybe,
    pureMaybe : pureMaybe,
    maybe : maybe,
    isNone : isNone,
    isJust : isJust,
    fromMaybe : fromMaybe,
    mapMaybe : mapMaybe,
    bindMaybe : bindMaybe,
    applyMaybe : applyMaybe,
    showMaybe : showMaybe,
    eqMaybe : eqMaybe,
    foldlMaybe : foldlMaybe
  }
})();
oc.test_maybe = (function(){
  var m = oc.instances.pure.Maybe(2);
  var m2 = oc.instances.pure.Maybe(3);
  var testNone = oc.std.maybes.none;
  var maybeBindFunc = function(_a1){
    if((function(x){
      return oc.std.ff.eqInt(x,1);
    })(_a1)){
      return (function(x){
        return oc.std.maybes.none;
      })(_a1);
    }else{
      if((function(x){
        return oc.std.ff.eqInt(x,2);
      })(_a1)){
        return (function(x){
          return {
            just : 3
          };
        })(_a1);
      }else{
        throw "cases error";
      }
    }
  };
  return {
    m : m,
    m2 : m2,
    testNone : testNone,
    maybeBindFunc : maybeBindFunc,
    item1 : oc.testing.checkEq(oc.instances.eq.Bool,oc.std.maybes.isJust(m),true),
    item2 : oc.testing.checkEq(oc.instances.eq.Bool,oc.std.maybes.isNone(testNone),true),
    item3 : oc.testing.check((oc.std.maybes.maybe(1,oc.std.prelude.cnst(2),oc.std.maybes.none) === 1)),
    item4 : oc.testing.check((oc.std.maybes.maybe(1,function(x){
      return (x + 1);
    },m2) === 4)),
    item5 : oc.testing.check((oc.std.maybes.fromMaybe(0,oc.std.maybes.none) === 0)),
    item6 : oc.testing.check((oc.std.maybes.fromMaybe(0,oc.std.maybes.pureMaybe(2)) === 2)),
    item7 : oc.testing.check((oc.std.maybes.fromMaybe(0,m) === 2)),
    item8 : oc.testing.check((oc.std.maybes.fromMaybe(0,oc.instances.map.Maybe(function(x){
      return (x + 1);
    },m)) === 3)),
    item9 : oc.testing.check((oc.std.maybes.fromMaybe(0,oc.instances.bind.Maybe(maybeBindFunc,m)) === 3)),
    item10 : oc.testing.check((oc.instances.foldl.Maybe(function(a,e){
      return (a + e);
    },1,m) === 3)),
    item11 : oc.testing.check((oc.std.maybes.showMaybe(oc.instances.show.Int,testNone) === "none")),
    item12 : oc.testing.check(((function(p1){
      return oc.instances.show.Maybe(oc.instances.show.Int,p1);
    })(m) === "2")),
    item13 : oc.testing.check((function(p1,p2){
      return oc.instances.eq.Maybe(oc.instances.eq.Int,p1,p2);
    })(m,m))
  }
})();
