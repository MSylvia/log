var Desamber = {
	display: function(a) {
		var c = a.y.toString().substr(-2);
		return "Y" == a.t || "L" == a.t ? a.t + "\u00b7" + c : a.m + " " + ("0" + a.t).substr(-2) + " " + c
	},
	nth: function(a) {
		a = void 0 === a ? new Date : a;
		return Math.floor((a - new Date(a.getFullYear(), 0, 1)) / 864E5) + 1
	},
	quarter: function(a) {
		a = void 0 === a ? this.nth(new Date) : a;
		return Math.floor(this.week(a) / 13) + 1
	},
	month: function(a) {
		a = void 0 === a ? this.nth(new Date) : a;
		return "Unesamber Dutesamber Trisesamber Tetresamber Pentesamber Hexesamber Sevesamber Octesamber Novesamber Desamber Undesamber Dodesamber Tridesamber".split(" ")[Math.floor((a - 1) / 28)]
	},
	week: function(a) {
		a = void 0 === a ? this.nth(new Date) :
			a;
		return Math.floor(a / 7)
	},
	date: function(a) {
		a = void 0 === a ? this.nth(new Date) : a;
		a -= 28 * Math.floor(a / 28);
		0 == a && (a = 28);
		return a
	},
	day: function(a) {
		a = void 0 === a ? new Date : a;
		return a.getDay() + 1
	},
	convert: function(a) {
		a = void 0 === a ? new Date : a;
		var c = a.getFullYear(),
			b = this.nth(a),
			d;
		switch (b) {
			case 365:
				var e = "Y";
				var f = 0;
				b = d = void 0;
				break;
			case 366:
				e = "L";
				f = 0;
				b = d = void 0;
				break;
			default:
				e = this.date(b), f = this.week(b), d = this.month(b), b = this.quarter(b)
		}
		return {
			y: c,
			q: b,
			m: d,
			w: f,
			t: e,
			d: this.day(a)
		}
	}
}

module.exports = Desamber
