/*
Leetcode number: 811

A website domain "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com" and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

A count-paired domain is a domain that has one of the two formats "rep d1.d2.d3" or "rep d1.d2" where rep is the number of visits to the domain and d1.d2.d3 is the domain itself.

For example, "9001 discuss.leetcode.com" is a count-paired domain that indicates that discuss.leetcode.com was visited 9001 times.
Given an array of count-paired domains cpdomains, return an array of the count-paired domains of each subdomain in the input. You may return the answer in any order.

*/


/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
  const visitCounts = {};
  for (let i = 0; i < cpdomains.length; i++) {
      // Split visits and domains by the space
      const [visits, domains] = cpdomains[i].split(" ");
      
      // Create array of subdomains in domain
      let subdomains = domains.split(".");
      
      while(subdomains.length) {
          // Join all items in subdomains array
          let subdomain = subdomains.join('.');
          
          // If subdomain already exists in object, add to existing count
          visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
              Number(visitCounts[subdomain]) + Number(visits) :
              visits;
          
          // Remove first subdomain from array
          subdomains.shift();
      }
  }

  return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
};