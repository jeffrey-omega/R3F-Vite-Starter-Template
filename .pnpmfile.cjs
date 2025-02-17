/**
 * esbuild overrides to update esbuild to a non-vulnerable version
 * The earliest fixed version is 0.25.0
 *
 * @see https://github.com/jeffrey-omega/R3F-Xbox-Elite-Wireless-Controller-Series-2/security/dependabot/3
 */

function readPackage(pkg, context) {
  if (pkg.dependencies.esbuild) {
    pkg.dependencies.esbuild = "^0.25.0";
  }
  return pkg;
}

module.exports = {
  readPackage,
};
